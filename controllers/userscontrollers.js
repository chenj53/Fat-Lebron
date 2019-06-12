'use strict';
const users = require( '../models/users' );

exports.saveusers = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newusers = new users( {

    password: req.body.password,
    address: req.body.address,
    address2: req.body.adress2,
    city: req.body.city,
    state: req.body.state,
    zipcode:req.body.zipcode,

  } )

  //console.log("skill = "+newSkill)

  newusers.save()
    .then( () => {
      res.redirect( '/showusers' );
    } )
    .catch( error => {
      res.send( error );
    } );
};



exports.getAllusers = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  users.find()
    .exec()
    .then( ( users ) => {
      res.render( 'users', {
        users: users, title:"Users"
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};
