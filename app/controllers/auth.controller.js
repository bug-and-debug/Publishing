'use strict';

const express = require('express');
const router = express.Router();
const UserModel = require('../models/user.model');
const ErrorHelper = require('../helpers/error-helper');
const authMiddleware = require('../middlewares/auth.middleware');

const login = async function(req, res) {
  try {
    let info = req.body;
    let user = await UserModel.findOne().where('socialConnects').elemMatch({ provider: info.provider, id: info.id });

    if(user == null) {
      user = new UserModel({
        name: info.name,
        alias: info.email.substring(0, info.email.lastIndexOf("@")),
        email: info.email,
        photo: info.photoUrl,
        location: info.location,
        socialConnects: [info]
      });
      await user.save();
    }
    else {
    }

    req.session.login_user_id = user._id;
    res.send(user);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const addSocialAccount = async function(req, res) {
  try {
    let userId = req.params.id
    let info = req.body;
    let user = await UserModel.findOne({_id: userId})

    if(user == null) {
      throw new Error('USER_NOT_FOUNT');
    } else {
      if (user.socialConnects.findIndex(account => account.provider == info.provider) >= 0) {
        req.session.login_user_id = user._id;
        res.send(user);
      } else {
        user.addSocialAccount(info)
        await user.save();
        user = await UserModel.findOne({_id: userId})
        req.session.login_user_id = user._id;
        res.send(user);
      }
    }
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const removeSocialAccount = async function(req, res) {
  try {
    let userId = req.params.id
    let provider = req.body.provider;
    let user = await UserModel.findOne({_id: userId})

    console.log('provider is ' + provider)
    if(user == null) {
      throw new Error('USER_NOT_FOUNT');
    } else {
      if (user.socialConnects.findIndex(account => account.provider == provider) >= 0) {
        if(user.socialConnects.length > 1) {
          user.removeSocialAccount(provider)
          await user.save();
          user = await UserModel.findOne({_id: userId})
          res.send(user);
        } else {
          throw new Error('CAN_NOT_REMOVE')
        }
      } else {
        throw new Error('SOCIAL_ACCOUNT_NOT_LINKED')
      }
    }
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const me = async function(req, res) {
  try {
    res.send(req.user);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const logout = async function(req, res) {
  try {
    req.user = null;
    req.session.login_user_id = null;
    res.send(true);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

// routes
router.post('/login', login);
router.post('/:id/addSocialAccount', addSocialAccount);
router.post('/:id/removeSocialAccount', removeSocialAccount);
router.get('/me',  authMiddleware.authorization, me);
router.get('/logout', authMiddleware.authorization, logout);

module.exports = router;
