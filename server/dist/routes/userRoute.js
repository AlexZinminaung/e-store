"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const route = express.Router();
const { createUser, verifyEmail } = require('../controllers/userController');
route.post('/create', createUser);
route.get('/verify/:token', verifyEmail);
module.exports = route;
//# sourceMappingURL=userRoute.js.map