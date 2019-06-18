'use strict';
const users = require( '../models/users' );

exports.saveusers = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  console.log("in saveusers !!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

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



exports.getAllusers = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  users.find()
    .exec()
    .then( ( users ) => {
     console.log("found the users")
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
