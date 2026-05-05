"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const route = express.Router();
const { createUser, verifyEmail, loginUser, getUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
route.post('/create', createUser);
route.get('/verify/:token', verifyEmail);
route.post('/login', loginUser);
route.post('/me', authMiddleware, getUser);
module.exports = route;
//# sourceMappingURL=userRoute.js.map