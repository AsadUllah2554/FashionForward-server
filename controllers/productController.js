const Product = require('../models/productModel');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');



//get all product

const getProducts = async (req, res) => { 
   // const user_id = req.user.id;
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}

//get a single product

const getProduct = async (req, res) => { 
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"No such product found"})
    }
    const product = await Product.findById(id);

    if(!product){
        return res.status(404).json({msg:"No such product found"})
    }
    res.status(200).json(product)
}


const createProduct = async (req, res) => {
const {name, price, color,stock,size,url,category} = req.body;

const id = uuidv4();
let emptyFields = [];

if(!name) emptyFields.push('name');
if(!price) emptyFields.push('price');
if(!color) emptyFields.push('color');
if(!stock) emptyFields.push('stock');
if(!size) emptyFields.push('size');
if(!url) emptyFields.push('url');
if(!category) emptyFields.push('category');

if(emptyFields.length > 0){
    return res.status(400).json({error: "Please fill in all the field", emptyFields})
}

try{
    //const user_id = req.user.id;
    const product = await Product.create({ id ,name, price, color,stock,size,url,category})
     res.status(200).json(product)
   
}catch(err){
    res.status(400).json({error:err.message})
}

}

//delete a wrokout
const deleteProduct = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"No such product found"})
    }
    const product =   await Product.findOneAndDelete({_id:id});

    if(!product){
        return res.status(404).json({msg:"No such product found"})
    }

    res.status(200).json(product)
}

// update a product

 const updateProduct = async (req, res) => {
    const {id} = req.params;
    // const {title, reps, load} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"No such product found"})
    }
    const product =   await Product.findOneAndUpdate({_id:id},{...req.body});

    if(!product){
        return res.status(404).json({msg:"No such product found"})
    }

    res.status(200).json(product)
 }

module.exports = {
    createProduct,getProducts,getProduct,deleteProduct,updateProduct
}