const express = require('express');

const { signupAdmin, loginAdmin } = require('../controllers/adminController');
const router = express.Router();

// login route 
router.post('/login', loginAdmin) 


// signup route
router.post('/signup', signupAdmin )
 

module.exports = router;