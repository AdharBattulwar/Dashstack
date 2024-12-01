const mongoose = require('mongoose');
const FirstName = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})
const userSchema = mongoose.Schema({
    Name:{
        FirstName
    },
    PRN:{
        type:Number,
        required:true
    },
    RollNo:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    PhoneNo:{
        type:Number,
        required:true,
        length:10
    },
    Department:{
        type:String,
        required:true
    },
    // College:{
    //     type:String,
    //     required:true
    // },
    Address:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("StudentInfo",userSchema);