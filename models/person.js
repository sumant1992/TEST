const mongoose = require('mongoose');

const ContactPerson = new mongoose.Schema({

    namePerson: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        unique: true,
        required: true
    },

});


module.exports=mongoose.model("ContactPerson",ContactPerson);
