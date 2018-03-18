'use strict';

const express = require('express');
const router = express.Router();
const ArticleModel = require('../models/article.model');
const GroupModel = require('../models/group.model');
const UserModel= require('../models/user.model');
const ErrorHelper = require('../helpers/error-helper');
const _ = require('lodash');
const diffbot = require('../helpers/diffbot');

const index = async function(req, res) {
  try {
    let articles = await ArticleModel.find().populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(articles);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const slug = async function(req, res) {
  try {
    let article = await ArticleModel.findOne({ slug: req.params.slug}).populate('users').populate('groups.group').lean().exec();
    if (article == null) throw new Error('ARTICLE_SLUG_NOT_FOUND');
    article.bookmarked = false
    if (req.params.userId != 'none') {
      let user = await UserModel.findById(req.params.userId);
      if (_.findIndex(user.bookmarks, bookmark => bookmark.toString() == article._id.toString()) >= 0)
        article.bookmarked = true;
    }
    article.locations = [];
    article.users.forEach(user => {
      article.locations.push(user.location)
    })
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

const search = async function(req, res) {
  console.log('_______________ search .... ___________')
  try {
    let query = _.pick(req.query, [ 'search', 'views', 'periodStart', 'periodEnd', 'stateView', 'g11', 'g12', 'g13', 'user', 'location', 'group', 'bookmarkedBy', 'bookmarks' ]);
    let builder = ArticleModel.find();

    //search text
    if(query.search && query.search.trim() != '') {
      builder = builder.or([{
        title: { $regex: query.search, $options: 'i' }
      },{
        body: { $regex: query.search, $options: 'i' }
      }, {
        slug: query.search.trim()
      }]);
    }

    // period
    if(query.periodStart) {
      builder = builder.where('createdAt').gte(query.periodStart);
      builder = builder.where('comments.createdAt').gte(query.periodStart);
    }
    if(query.periodEnd) {
      builder = builder.where('createdAt').lte(query.periodEnd);
      builder = builder.where('comments.createdAt').lte(query.periodEnd);
    }

    // user
    if(query.user) {
      builder = builder.where('users').equals(query.user);
    }

    // location
    if(query.location) {
      builder = builder.where('locations').equals(query.location);
    }

    // group
    if(query.group) {
      builder = builder.where('groups').elemMatch({ group: query.group });
    }

    let groupsFilter = ['g11', 'g12', 'g13'];
    for(let i = 0; i < groupsFilter.length; i++) {
      let values = query[groupsFilter[i]];
      if(!Array.isArray(values)) values = [values];
      let g = groupsFilter[i];
      let orConditions = [];
      for(let value of values) {
        if(value) {
          let existingGroup = await GroupModel.findOne({name: { $regex: '^' + value.toLowerCase() + '$', $options: 'i'}}).where('groupType').equals(g).exec();
          if(existingGroup == null) {
            res.send([]);
            return;
          }
          orConditions.push({
            groups: { $elemMatch: { group: existingGroup._id } }
          });
        }
      };
      if(orConditions.length > 0) {
        builder = builder.or(orConditions);
      }
    };

    // sort
    if(query.views == 'Views') {
      builder = builder.sort('-views');
    }
    else {
      builder = builder.sort('-createdAt');
    }

    let articles = await builder.populate('users').populate('groups.group').populate('locations').lean().exec();

    // state
    if(query.views == 'S1' || query.views == 'S2' || query.views == 'S3') {
      _.each(articles, (article) => {
        article.groups = _.filter(article.groups, (group) => {
          return group.group.state == query.views;
        });
      });
    }

    if(query.bookmarkedBy != null) {
      let user = await UserModel.findById(query.bookmarkedBy)
      articles.forEach(article => {
        console.log(article._id.toString())
        if (_.findIndex(user.bookmarks, bookmark => bookmark.toString() == article._id.toString()) >= 0) {
          article.bookmarked = true
        } else {
          article.bookmarked = false
        }
      })
    } else {
      articles.forEach(article => {
        article.bookmarked = false
      })
    }

    if (query.bookmarks) {
      articles = articles.filter(article => article.bookmarked)
    }

    articles.forEach(article => {
      article.users.forEach(user => {
        article.locations.push(user.location)
      })
    })
    res.send(articles);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const get = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const create = async function(req, res) {

  let article = await ArticleModel.findOne({'articleLink': req.body.article.articleLink}).populate('users').populate('groups.group').populate('locations').exec();
  if(article != null) { // update
    try {
      article.addUser(req.body.user._id)
      article.addComment(req.body.comment, req.body.user);
      await article.addGroups(req.body.groups, req.body.user);
      await article.save();

      article = await ArticleModel.findById(article._id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
      res.send(article);
    }
    catch(err) {
      ErrorHelper.handleError(res, err, 400);
    }
  } else {
    try {
      let newArticle = new ArticleModel(req.body.article);

      newArticle.addUser(req.body.user._id);
      newArticle.addComment(req.body.comment, req.body.user);
      await newArticle.addGroups(req.body.groups, req.body.user);
      await newArticle.save();

      newArticle = await ArticleModel.findById(newArticle._id).populate('user').populate('groups.group').populate('locations').exec();
      res.send(newArticle);

    }
    catch(err) {
      console.log(err);
      ErrorHelper.handleError(res, err, 400);
    }
  }
};

const analyze = async function(req, res) {
  try {
    let parsedInfo = await diffbot.analyze(req.body.url);
    res.send(parsedInfo);
  }
  catch(err) {
    console.log(err);
    ErrorHelper.handleError(res, err, 400);
  }
};

const update = async function(req, res) {
  try {
    await ArticleModel.update({_id: req.params.id}, req.body).exec();
    let article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const edit = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).populate('users').populate('groups.group').populate('locations').exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');

    // article.addUser(req.user._id);

    article.addComment(req.body.comment, req.body.user);
    await article.addGroups(req.body.groups, req.body.user);

    await article.save();

    article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(article);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

const destroy = async function(req, res) {
  try {
    await ArticleModel.deleteOne({_id: req.params.id});
    res.send({status: 'ok'});
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

const voteGroup = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');

    let votes = article.voteGroup(req.params.groupId, req.params.vote, req.params.userId);

    await article.save();

    //article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(votes);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

const voteComment = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');

    let votes = article.voteComment(req.params.commentId, req.params.vote, req.params.userId);
    await article.save();

    // article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(votes);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

const bookMark = async function(req, res) {
  try {
    let article = await ArticleModel.findById(req.params.id).exec();
    if (article == null) throw new Error('ARTICLE_ID_NOT_FOUND');

    article.bookMark();

    await article.save();
    article = await ArticleModel.findById(req.params.id).populate('user').populate('users').populate('groups.group').populate('locations').exec();
    res.send(article);
  } catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

// routes

//FUNCTIONAL
router.get('/search', search);
router.put('/:id/edit', edit);
router.post('/:id/group/:groupId/user/:userId/vote/:vote', voteGroup);
router.post('/:id/comment/:commentId/user/:userId/vote/:vote', voteComment);
router.post('/:id/bookMark', bookMark);
router.post('/analyze', analyze);
//router.get('/slug/:slug', slug);
router.get('/:slug/user/:userId', slug);
//CRUD
router.get('/', index);
router.get('/:id', get);
router.post('/', create);
router.put('/:id',  update);
router.delete('/:id', destroy);

module.exports = router;
