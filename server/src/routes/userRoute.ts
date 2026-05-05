const express = require('express')
const route = express.Router();

const { createUser } = require('../controllers/userController')



route.post('/create', createUser);


module.exports = route