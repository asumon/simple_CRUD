console.log('I am from router')
const express = require('express');
const router = express.Router()
var path    = require("path");
var fs = require("fs");



//GET all mentors
//router.get('/',function(req,res){
   

  //});


//post
router.post('/create',(req,res)=>{

    console.log('Post Data RCVD');

    var name = req.body.title;
    var tags = req.body.tag;
    var email = req.body.mail;
    var note = req.body.contents;

    //var obj=JSON.parse()

    //start writing
    
    var obj = [{ title: name ,tag:tags, mail: email, contents: note}];

    var jsonobj=JSON.stringify(obj)
    console.log(jsonobj)
    

    fs.writeFile(file,jsonobj,(error)=>{
        if (error){
            console.error(error);
        }
    })  
    res.status(201).json({
        message:"Data is saved"
  
    })

});

//Dynamic ID
router.get('/:id',(req, res)=>{
const id = req.params.id
    res.status(201).json({
       id
    })
})

//update
router.put('/update',(req, res)=>{
    res.status(201).json({
        message:"Hello Baby from Patch"
    })
   
})

//Delete
router.delete('/delete',(req, res)=>{
    res.status(201).json({
        message:"Hello Baby from Delete"
    })
   
})





module.exports = router;