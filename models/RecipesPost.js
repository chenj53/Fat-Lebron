'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var recipesPostSchema = Schema( {
  userId: ObjectId,
  userName: String,
  post: String,
  dishName: String,
  createdAt: Date,
  dishDescription: String,
  Ingredients: String,
} );

module.exports = mongoose.model( 'RecipesPost', recipesPostSchema );
