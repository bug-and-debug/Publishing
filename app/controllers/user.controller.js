'use strict';

const express = require('express');
const router = express.Router();
const UserModel = require('../models/user.model');
const ErrorHelper = require('../helpers/error-helper');
const _ = require('lodash')

const index = async function(req, res) {
  try {
    let users = await UserModel.find().exec();
    res.send(users);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const get = async function(req, res) {
  try {
    let user = await UserModel.findById(req.params.id).exec();
    if (user == null) throw new Error('USER_ID_NOT_FOUND');
    res.send(user);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const create = async function(req, res) {
  try {
    let user = new UserModel(req.body);
    await user.save();
    res.send(user);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const bookmark = async function(req, res) {
  console.log(req.params)
  try {
    let user = await UserModel.findById(req.params.id).exec();
    if(user == null) throw new Error('USER_ID_NOT_FOUND');
    if (user.bookmarks.findIndex(bookmark => req.params.articleId.toString() == bookmark.toString()) >= 0) {
      user.bookmarks = user.bookmarks.filter(bookmark => bookmark.toString() != req.params.articleId.toString())
    } else {
      user.bookmarks.push(req.params.articleId)
    }

    await user.save()
     res.send(user)
  } catch (err) {
    ErrorHelper.handleError(res, err, 400)
  }
  //res.send('ok')
}

const update = async function(req, res) {
  try {
    await UserModel.update({_id: req.params.id}, req.body).exec();
    let user = await UserModel.findById(req.params.id).exec();
    if (user == null) throw new Error('USER_ID_NOT_FOUND');
    user.update(req.body)
    await user.save();
    user = await UserModel.findById(req.params.id).exec();
    res.send(user);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const destroy = async function(req, res) {
  try {
    await UserModel.deleteOne({_id: req.params.id});
    res.send(true);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
}

// routes
router.get('/', index);
router.get('/:id', get);
router.post('/', create);
router.post('/:id/bookmark/:articleId', bookmark);
router.put('/:id',  update);
router.delete('/:id', destroy);

module.exports = router;
