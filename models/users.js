'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var usersSchema = Schema( {
  Name: String,
  Email:String,
  Password: String,
  Address: String,
  City: String,
  State: String,
  Zip: String,
  googleid: String,
  googletoken: String,
  googlename:String,
  googleemail:String,
  description: String,
  profilePicURL: String,
  bio: String,
  lastUpdate: Date,
  userName:String,
  apicity: String,
  apistate: String,
  apizip: String,
  dishName: String,
  Ingredients: String,
  dishDescription: String,

} );

module.exports = mongoose.model( 'users', usersSchema );
