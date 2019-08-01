'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// sell post
var ShopCommentSchema = Schema( {
  userId: ObjectId,
  userName: String,
  createdAt: Date,
  comment: String,
  postId: String,
  commentCreated: String,




} );

module.exports = mongoose.model( 'ShopComment', ShopCommentSchema );
