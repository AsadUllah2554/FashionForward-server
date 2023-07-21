const express = require('express');
const { createProduct,getProducts,getProduct,deleteProduct,updateProduct } = require('../controllers/productController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// protecting the routes If user is not logged in, they cannot access the routes
//router.use(requireAuth)

//Get all workouts
router.get('/', getProducts)

//Get a single workout
router.get('/:id', getProduct)

//Post a new workouts
router.post('/', createProduct)

//Delete a workout
router.delete('/:id', deleteProduct)

//Update a workout
router.patch('/:id', updateProduct)

module.exports = router;