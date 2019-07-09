'use strict';
const users = require( '../models/users' );
const axios = require('axios');


exports.update = ( req, res ) => {

  users.findOne(res.locals.user._id)
  .exec()
  .then((profile) => {
    console.log("just found a profile")
    console.dir(profile)
    profile.userName = req.body.userName
    profile.profilePicURL = req.body.profilePicURL
    profile.apizip = req.body.apizip


    profile.lastUpdate = new Date()
    profile.save()
    .then(() => {
      res.redirect( '/profile' );
    })

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
};

exports.getAllProfiles = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  users.find()
    .exec()
    .then( ( profiles ) => {
      res.render( 'profiles', {
        profiles:profiles, title:"Profiles"
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

// this displays all of the skills
exports.getOneProfile = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  users.findOne({_id:id})
    .exec()
    .then( ( profile ) => {
      res.render( 'showProfile', {
        profile:profile, title:"Profile"
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
