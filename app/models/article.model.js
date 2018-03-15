'use strict';

const _ = require('lodash');
const shortid = require('short-id');
const GroupModel = require('./group.model');
const GroupSchema = require('./group.model').GroupSchema;
const CommonHelper = require('../helpers/common.helper.js');

const CommentSchema = new mongoose.Schema({
	text: mongoose.Schema.Types.String,
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	votes: {
		agrees: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], default: []},
		disagrees: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], default: []}
	}
}, {
	timestamps: true
});

const ArticleSchema = new mongoose.Schema({
	slug: mongoose.Schema.Types.String,
	title: mongoose.Schema.Types.String,
	articleDate: { type: mongoose.Schema.Types.Date, default: Date.now },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	pictureLink: mongoose.Schema.Types.String,
	body: mongoose.Schema.Types.String,
	bodyHtml: mongoose.Schema.Types.String,
	articleLink: mongoose.Schema.Types.String,
	imageLink: mongoose.Schema.Types.String,
	articleSource: mongoose.Schema.Types.String,
	articleSourceIcon: mongoose.Schema.Types.String,
	sourceTrusted: mongoose.Schema.Types.Boolean,
	views: { type: mongoose.Schema.Types.Number, default: 0 },
	shares: {
		twitter: { type: mongoose.Schema.Types.Number, default: 0 },
		facebook: { type: mongoose.Schema.Types.Number, default: 0 }
	},
	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	groups: [{
		group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
		user: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], default: []},
		votes: {	// except g11
			agrees: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], default: []},
			disagrees: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], default: []}
		}
	}],
	comments: [CommentSchema],
	locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }]
}, {
	timestamps: true
});

ArticleSchema.methods.addUser = function(userId) {
	if(_.find(this.users, {_id: userId})) {}
	else {
		this.users.push(userId);
	}
};
ArticleSchema.methods.addComment = function(text, user) {
	if(text != null && text.trim().length != "") {
		this.comments.push({ text: text, user: user._id });
	}
};

ArticleSchema.methods.bookMark = function() {
	this.bookmarked = !this.bookmarked;
}

ArticleSchema.methods.addGroups = async function(groups, user) {

  //let isArticleOwner = _.findIndex(this.users, u => u['_id'].toString() === user._id.toString()) >= 0 ? true : false;

/*
	let indices = [];
	this.groups.forEach ((group, i) =>{
		let indexToDelete = _.findIndex(groups, (newGroup) => {
			return group.group.groupType == newGroup.groupType && group.group.name.toLowerCase() == newGroup.name.toLowerCase();
		})
		if (indexToDelete == -1) {
			indices.push(i);
		}
	})
	for (var i = indices.length -1; i >= 0; i--)
   this.groups.splice(indices[i],1);


	let appendingGroups = [];
	for(let group of groups) {
	  let existingGroup = _.find(this.groups, (articleGroup) =>{
	    return group.groupType == articleGroup.group.groupType && group.name.toLowerCase() == articleGroup.group.name.toLowerCase();
	  });
	  if(existingGroup) {
	  }
	  else {
	  	let existingGroup = await GroupModel.findOne({name: { $regex: '^' + group.name.toLowerCase() + '$', $options: 'i'}}).where('groupType').equals(group.groupType).exec();
			if(!(existingGroup)) {
				existingGroup = new GroupModel(group);
				await existingGroup.save();
			}
			appendingGroups.push({ group: existingGroup._id, user: [user._id]});
	  }
	};
  if(appendingGroups.length > 0) {
  	this.groups = this.groups.concat(appendingGroups);
  }
	*/
	let indices = []

	this.groups.forEach((group, i) => {
		if(_.findIndex(group.user, u => u.toString() === user._id) >= 0 && _.findIndex(groups, ug => group.group.groupType == ug.groupType && group.group.name.toLowerCase() == ug.name.toLowerCase()) < 0) {
			if (group.user.length > 1)
				group.user = _.remove(group.user, u => u.toString() !== user._id)
			else
				indices.push(i)
		}
	})

	for (var i = indices.length -1; i >= 0; i--)
   this.groups.splice(indices[i],1);

	indices = []
	groups.forEach((group, i) => {
 		if (_.findIndex(this.groups, g => g.group.groupType == group.groupType && g.group.name.toLowerCase() == group.name.toLowerCase()) >= 0)
 			indices.push[i]
 	})

	for (var i = indices.length -1; i >= 0; i--)
   groups.splice(indices[i],1);

	for (let group of groups) {
		let existingGroupIndex = _.findIndex(this.groups, g => {
			return g.group.groupType == group.groupType && g.group.name.toLowerCase() == group.name.toLowerCase()
		})

		if (existingGroupIndex > -1) {
			this.groups[existingGroupIndex].user.push(user._id)
		} else {
			let groupToPut = await GroupModel.findOne({name: { $regex: '^' + group.name.toLowerCase() + '$', $options: 'i'}}).where('groupType').equals(group.groupType).exec();

			if(!groupToPut) {
				groupToPut = new GroupModel(group);
				await existingGroup.save();
			}

			this.groups.push({group: groupToPut._id, user: [user._id]})
		}
	}

	return Promise.resolve();
};

ArticleSchema.methods.addLocation = async function(locations) {
	return Promise.resolve();
};
ArticleSchema.methods.voteGroup = function(id, vote, userId) {
  let group = _.find(this.groups, (g) => g._id == id);
	if (group) {
		if (vote === 'agree') {
			if (!_.find(group.votes.agrees, user_id => user_id.toString() === userId))
				group.votes.agrees.push(userId)
			group.votes.disagrees = _.remove(group.votes.disagrees, user_id => user_id.toString() !== userId)
		} else if (vote === 'disagree') {
			if (!_.find(group.votes.disagrees, user_id => user_id.toString() === userId))
				group.votes.disagrees.push(userId)
			group.votes.agrees = _.remove(group.votes.agrees, user_id => user_id.toString() !== userId)
		} else { // none
			group.votes.agrees = _.remove(group.votes.agrees, user_id => user_id.toString() !== userId)
			group.votes.disagrees = _.remove(group.votes.disagrees, user_id => user_id.toString() !== userId)
		}
	} else {
		throw new Error('GROUP_ID_NOT_FOUND')
	}

	return group.votes
};

ArticleSchema.methods.voteComment = function(id, vote, userId) {
	let comment = _.find(this.comments, comment => comment._id == id)
	if (comment) {
		if (vote === 'agree') {
			if (!_.find(comment.votes.agrees, user_id => user_id.toString() === userId))
				comment.votes.agrees.push(userId)
			comment.votes.disagrees = _.remove(comment.votes.disagrees, user_id => user_id.toString() !== userId)
		} else if (vote === 'disagree') {
			if (!_.find(comment.votes.disagrees, user_id => user_id.toString() === userId))
				comment.votes.disagrees.push(userId)
			comment.votes.agrees = _.remove(comment.votes.agrees, user_id => user_id.toString() !== userId)
		} else { // none
			comment.votes.agrees = _.remove(comment.votes.agrees, user_id => user_id.toString() !== userId)
			comment.votes.disagrees = _.remove(comment.votes.disagrees, user_id => user_id.toString() !== userId)
		}
	} else {
		throw new Error('COMMENT_ID_NOT_FOUND')
	}

	return comment.votes
};

ArticleSchema.pre('save', function(next) {
	if( (typeof this.slug) == 'undefined' ){
		this.slug = CommonHelper.generateShortId();
	}
	next();
});

module.exports = mongoose.model('Article', ArticleSchema);

module.exports.GroupSchema = GroupSchema;
module.exports.CommentSchema = CommentSchema;
module.exports.ArticleSchema = ArticleSchema;
