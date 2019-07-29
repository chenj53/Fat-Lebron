'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// sell post
var ShopSchema = Schema( {
  userId: ObjectId,
  userName: String,
  createdAt: Date,
  post: String,
  City: String,
  State: String, //title
  Zip: String,
  Address: String,





} );

module.exports = mongoose.model( 'Shop', ShopSchema );
