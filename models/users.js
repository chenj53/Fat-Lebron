'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var usersSchema = Schema( {
  name: String,
  inputEmail4: String,
  inputPassword4: String,
  inputAddress: String,
  inputCity: String,
  inputState: String,
  inputZip: String,






} );

module.exports = mongoose.model( 'users', usersSchema );
