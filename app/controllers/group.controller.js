'use strict';

const express = require('express');
const router = express.Router();
const GroupModel = require('../models/group.model');
const ErrorHelper = require('../helpers/error-helper');

const index = async function(req, res) {
  try {
    let groups = await GroupModel.find().exec();
    res.send(groups);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const get = async function(req, res) {
  try {
    let group = await GroupModel.findById(req.params.id).exec();
    if (group == null) throw new Error('GROUP_ID_NOT_FOUND');
    res.send(group);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const create = async function(req, res) {
  try {
    let group = new GroupModel(req.body);
    await group.save();
    res.send(group);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const update = async function(req, res) {
  try {
    await GroupModel.update({_id: req.params.id}, req.body).exec();
    let group = await GroupModel.findById(req.params.id).exec();
    if (group == null) throw new Error('GROUP_ID_NOT_FOUND');
    res.send(group);
  }
  catch(err) {
    ErrorHelper.handleError(res, err, 400);
  }
};

const destroy = async function(req, res) {
  try {
    await GroupModel.deleteOne({_id: req.params.id});
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
router.put('/:id',  update);
router.delete('/:id', destroy);

module.exports = router;