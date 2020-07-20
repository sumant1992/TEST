var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/*
router.get('/', function(req, res, next) {
  res.render('index');
});
*/



const PersonModel = require('../models/person');





router.get('/',async (req,res)=>{
  await PersonModel.find((err,data)=>{
   if(!err){
     res.render("index",{data:data})
   }
    else{
      res.send(err);
   }
  })

})

router.post('/',async (req,res)=>{
     var name = req.body.name;
     var phone = req.body.phone;
     var person = new PersonModel({
         namePerson:name,
         PhoneNumber:phone
     })
    try{
        const a1 =  await person.save()
        res.redirect('/');
    }catch(err){
        res.send('Error')
    }


})

router.get("/delete/:id",async (req,res)=>{

    PersonModel.findByIdAndDelete(req.params.id,(err)=>{
        if (!err) {
            res.redirect('/');
        }
        else { console.log('Error in employee delete :' + err); }

    });
});

router.get("/edit/:id",async (req,res)=>{
    var id = req.params.id;
    var edit = PersonModel.findById(id);
    edit.exec(function (err,data) {
    if(err){
            req.redirect('/');
    }else {
        res.render("edit", {title: "UPDATE RECORD", record: data})
    }
    })
});

router.post("/update/",function (req,res,next) {

    var name = req.body.name;
    var phone = req.body.phone;
    // PersonModel.update({req.body.id},{"$set":{"name":name,"phone":phone}})
console.log(req.body)

    var update = PersonModel.findByIdAndUpdate(req.body.id,{
        namePerson:name,
        PhoneNumber:phone

    });

    console.log(name+" "+phone)

    update.exec(function (err,data) {
        if(err){
            res.send(err);
        }else{
        console.log(data)
        res.redirect("/");
        }
    })
});




router.get('/test', (req,res)=> {
res.render("index2")
})






module.exports = router;
