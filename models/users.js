'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var usersSchema = Schema( {
  Name: String,
  Email: String,
  Password: String,
  Address: String,
  City: String,
  State: String,
  Zip: String,






} );

module.exports = mongoose.model( 'users', usersSchema );
