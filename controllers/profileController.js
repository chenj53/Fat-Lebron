'use strict';
const users = require( '../models/users' );
const axios = require('axios');
var apikey = require('../config/apikey');
console.dir(apikey)

exports.update = ( req, res ) => {


  users.findOne(res.locals.user._id)
    .exec()
    .then((profile) => {
      console.log("just found a profile")
      console.dir(profile)
        profile.userName = req.body.userName
        profile.profilePicURL = req.body.profilePicURL
        profile.apizip = req.body.apizip


        axios.get("https://www.zipcodeapi.com/rest/"+apikey.apikey.apizip+"/multi-info.json/"+profile.apizip+"/degrees")
        .then(function (response) {
          // handle success
          console.log('got the response!!')
          console.log(response);
          console.dir(response);
          profile.apicity = response.data.apicity
          profile.apistate = response.data.apistate
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
    })
};



exports.getAllProfiles = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  users.find()
    .exec()
    .then( ( profiles ) => {
      res.render( 'profiles', {
        profiles:profiles, title:"profiles"
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

/*

  let userdata =
  {

   Name: req.body.Name,
   Email: req.body.Email,
   Password: req.body.Password,
   Address:req.body.Address,
   City: req.body.City,
   State: req.body.State,
   Zip:req.body.Zip

 }
  let newusers = new users(userdata)
  console.log("userdata=")
  console.dir(userdata)
  console.log("newusers=")
  console.dir(newusers)
  console.log('done')

  //console.log("skill = "+newSkill)

  newusers.save()
    .then( () => {
      console.log("saved the data ----")
      res.redirect( '/showusers' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
*/
