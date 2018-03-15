'use strict';

const _ = require('lodash');

const SocialConnectSchema = new mongoose.Schema({
	email: mongoose.Schema.Types.String,
	id: mongoose.Schema.Types.String,
	name: mongoose.Schema.Types.String,
	photoUrl: mongoose.Schema.Types.String,
	provider: mongoose.Schema.Types.String
}, {
	timestamps: true
});

const UserSchema = new mongoose.Schema({
	name: mongoose.Schema.Types.String,
	alias: mongoose.Schema.Types.String,
	email: mongoose.Schema.Types.String,
	photo: mongoose.Schema.Types.String,
	location: {
		city: mongoose.Schema.Types.String,
		state: mongoose.Schema.Types.String,
		country: mongoose.Schema.Types.String
	},
	gender: { type: mongoose.Schema.Types.String, default: null },
	age: { type: mongoose.Schema.Types.Number, default: 0 },
	bookmarks:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
	socialConnects: [SocialConnectSchema]
}, {
	timestamps: true
});

UserSchema.methods.update = function(data) {
	this.email = data.email;
	this.alias = data.alias;
	this.gender = data.gender;
	this.age = data.age;
}

UserSchema.methods.addSocialAccount = function(account) {
	this.socialConnects.push(account)
}

UserSchema.methods.removeSocialAccount = function(provider) {
	this.socialConnects = _.remove(this.socialConnects, account => account.provider != provider)
}


module.exports = mongoose.model('User', UserSchema);

module.exports.UserSchema = UserSchema;
