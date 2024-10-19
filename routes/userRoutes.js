const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUserDetails } = require('../controllers/userController');

// Route for creating a new user
router.post('/register', createUser);

// Route for logging in a user
router.post('/login', loginUser);

// Route for getting user details
router.get('/:id', getUserDetails);

module.exports = router;
