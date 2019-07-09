'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var recipesCommentSchema = Schema( {

  userId: ObjectId,
  postId: ObjectId,
  userName: String,
  comment: String,
  createdAt: Date,
  dishDescription: String,
  Ingredients: String,
  dishName: String,

} );

module.exports = mongoose.model( 'RecipesComment', recipesCommentSchema );
