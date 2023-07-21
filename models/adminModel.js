
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

// Schema is a blueprint for the data that will be saved in the database
const adminSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
   
})

// static signup Method

adminSchema.statics.signup = async function(username,password){

    // validation
    if(!username || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(username)){
        throw Error('Username is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
    const exists = await this.findOne({username});
    if(exists){
        throw Error('Username already exists')
    }

    const admin = await this.create({username,password});
    return admin;
}

// static login Method

adminSchema.statics.login = async function(username,password){
    // validation
    if(!username || !password){
        throw Error('All fields must be filled')
    }

    const admin = await this.findOne({username});

    if(!admin){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password,admin.password);
    if(!match){
        throw Error('Incorrect password')
    }

    return admin;

   
}

module.exports = mongoose.model('Admin', adminSchema);
