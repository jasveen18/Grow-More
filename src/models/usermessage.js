const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },

    email : {
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("Invalid Email Id")
            }
        }

    },

    phone : {
        type:Number,
        unique:true,
        required:true,
        min:10
    },

    message: {
        type:String,
        required:true,
        minlength:3
    },
   
})

// create a collection
const User =  new mongoose.model("User", userSchema);
module.exports = User; 
