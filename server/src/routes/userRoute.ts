const express = require('express')
const route = express.Router();

const { createUser, verifyEmail, loginUser } = require('../controllers/userController')



route.post('/create', createUser);
route.get('/verify/:token', verifyEmail);
route.post('/login', loginUser);

module.exports = route