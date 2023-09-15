var express = require('express');
var router = express.Router();
var UserModel = require('../Model/user.model')
// create data
router.post('/',(req,res)=>{
  let newUser = new UserModel({
    firstName:req.body.firstName,
    lastName :req.body.lastName,
    email:req.body.email,
    password:req.body.password
  })
  newUser.save().then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})

// get method
router.get('/',(req,res)=>{
  UserModel.find().then(response=>{res.send(response)}).catch(err=>{
    res.send(err)
  })
})

// put method
router.put('/:id',(req,res)=>{
  UserModel.findByIdAndUpdate(req.params.id,{
    firstName:req.body.firstName,
    lastName :req.body.lastName,
    email:req.body.email,
    password:req.body.password
  }).then(response=>{
    res.send(response)
  }).catch(err=>{
    res.send(err)
  })
})

// delete operations
router.delete('/:id',(req,res)=>{
  UserModel.findByIdAndDelete(req.params.id).then(response=>{
    res.send(response)
  }).catch(err=>{
    res.send(err)
  })
})
module.exports = router;
