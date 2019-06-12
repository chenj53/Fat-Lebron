'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var usersSchema = Schema( {
  password: String,
  email: String,
  address: String,
  adress2: String,
  city: String,
  state: String,
  zipcode: String,






} );

module.exports = mongoose.model( 'users', usersSchema );
