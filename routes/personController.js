const mongoose = require('mongoose');

const express = require('express');

const router = express.Router();






const PersonModel = require('../models/person')

router.get('/',(req,res)=>{
    PersonModel.find((err,data)=>{
        if(!err){
            res.render("list", {data:data})
        }
        else{
            res.send(err);
        }

    })


    //res.send("i m controller");
})


module.exports=router;