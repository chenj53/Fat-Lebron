'use strict';
const Shop = require( '../models/Shop' );
const ShopComment = require( '../models/ShopComment' );

exports.saveShop = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  if (!res.locals.loggedIn) {
    return res.send("You must be logged in to post your shopping info.")
  }

  let newShop = new Shop(
   {

    userId: req.user._id,
    userName: req.user.googlename,
    post: req.body.post, //title
    createdAt:  new Date(),
    City: req.body.City,
    State: req.body.State,
    Zip: req.body.Zip,
    Address: req.body.Address,





   }
  )


  //console.log("skill = "+newSkill)

  newShop.save()
    .then( () => {
      res.redirect( '/showProfile/'+req.user._id  );
    } )
    .catch( error => {
      res.send( "Shop is "+error );
    } );
};


// this displays all of the skills
exports.getAllShop = ( req, res, next ) => {
  //gconsle.log('in getAllSkills')
  console.log("hello hello hello hello")
  Shop.find({}).sort({createdAt: -1})

    .exec()
    .then( ( posts) => {
      console.log(posts.length)
      res.render( 'myform', {
          title:"myform",posts:posts
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

exports.deleteShop = (req, res) => {
  console.log("in deleteShop")
  let deleteId = req.body.delete
  if (typeof(deleteId)=='string') {
      // you are deleting just one thing ...
      Shop.deleteOne({_id:deleteId})
           .exec()
           .then(()=>{res.redirect('/myform')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(deleteId)=='object'){
      Shop.deleteMany({_id:{$in:deleteId}})
           .exec()
           .then(()=>{res.redirect('/myform')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(deleteId)=='undefined'){
      //console.log("This is if they didn't select a skill")
      res.redirect('/myform')
  } else {
    //console.log("This shouldn't happen!")
    res.send(`unknown deleteId: ${deleteId} Contact the Developer!!!`)
  }

};


// this displays all of the skills
exports.showOneShop = ( req, res ) => {
//  gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  Shop.findOne({_id:id})
    .exec()
    .then( ( ShopForm ) => {
      res.render( 'ShopForm', {
        post:ShopForm, title:"Shop Form"
      } );
  } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'skill promise complete' );
    } );
};


exports.saveShopComment = (req,res) => {
  if (!res.locals.loggedIn) {
    return res.send("You must be logged in to post a ride.")
  }

  let newShopComment = new ShopComment(
   {
    userId: req.user._id,
    postId: req.body.postId,
    userName:req.user.googlename,
    comment: req.body.comment,
    createdAt: new Date(),

   }
  )

  console.log("skill = "+newSkill)

  newShopComment.save()
    .then( () => {
      res.redirect( 'showShop/'+req.body.postId );
    } )
    .catch( error => {
      res.send( error );
    } );
}






// this displays all of the skills
exports.attachAllShopComment = ( req, res, next ) => {
  //gconsle.log('in getAllSkills')
  console.log("in aAFC with id= "+req.params.id)
  var ObjectId = require('mongoose').Types.ObjectId;
  ShopComment.find({postId:ObjectId(req.params.id)}).sort({createdAt:-1})
    .exec()
    .then( ( comments ) => {
      console.log("comments.length=")
      console.dir(comments.length)
      res.locals.comments = comments
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};
