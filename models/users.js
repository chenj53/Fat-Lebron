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
  classIds:[Schema.Types.ObjectId],
  classCodes:[String],
  taEmail: String,


} );

module.exports = mongoose.model( 'users', usersSchema );
