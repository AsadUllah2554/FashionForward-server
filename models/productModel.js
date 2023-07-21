
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema is a blueprint for the data that will be saved in the database
const productSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    color:{
        type:[String],
        required:true
    },
    size:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
},{timestamps:true})

// Model is a wrapper for the schema, it is used to perform CRUD operations on the database
// Workout is name of sinlge Collection, It will create a collections named workouts to store workout
module.exports = mongoose.model('Product', productSchema);
