"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const { pool } = require('../configs/database');
const sendEmail = require('../utils/mailer');
const jwt = require('jsonwebtoken');
// register a new user
const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body || {};
    // check if user provide all required data
    if (!name || !email || !password) {
        // 400 bad request
        return res.status(400).json({ message: "Provide all fields!" });
    }
    // check if password long enought
    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 letter long!" });
    }
    // hash password
    const hashPassword = await bcrypt.hash(password, 10);
    // before creating a new user check if user exist or not
    const existedUserQuery = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    // if user already exist then check email is verified
    if (existedUserQuery.rows.length > 0) {
        // if yes then don't create a new one or modify
        if (existedUserQuery.rows[0].email_verified) {
            return res.status(400).json({ message: 'user already exist...' });
        }
        // if email is not vertified yet, then update the password
        await pool.query(`UPDATE users SET password_hash = $1 WHERE email = $2`, [hashPassword, email]);
        // create 5 min token 
        const token5min = await jwt.sign({ id: existedUserQuery.rows[0].id }, process.env.SECRET_KEY, { expiresIn: '5m' });
        // send verification email 
        sendEmail(email, token5min);
        return res.status(200).json({ message: 'Email sent!' });
    }
    // Insert to users row
    const newUserQuery = await pool.query(`INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING *`, [name, email, hashPassword]);
    // create 5 min token 
    const token5min = await jwt.sign({ id: newUserQuery.rows[0].id }, process.env.SECRET_KEY, { expiresIn: '5m' });
    // send verification email
    sendEmail(email, token5min);
    return res.status(200).json({ message: 'Email sent!' });
});
// verify email 
const verifyEmail = asyncHandler(async (req, res) => {
    const { token } = req.params;
    if (!token) {
        return res.status(404).json({ message: "Token Not Found!" });
    }
    try {
        // decode token
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        await pool.query(`UPDATE users SET is_verified = true WHERE id = $1`, [decoded.id]);
        return res.status(200).json({ message: "Email is verified now." });
    }
    catch (error) {
        console.log('Error verifying token');
        console.log(error);
        return res.status(400).json({ message: "Error verifying token" });
    }
});
// login user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body || {};
    // check if user provide all required data
    if (!email || !password) {
        // 400 bad request
        return res.status(400).json({ message: "Provide all fields!" });
    }
    // check if user is already exist
    // before creating a new user check if user exist or not
    const existedUserQuery = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    // if not then don' 
    if (existedUserQuery.rows.length < 1) {
        return res.status(404).json({ message: "Please Register first." });
    }
    // check user password if it is correct
    const isPasswordMatch = await bcrypt.compare(password, existedUserQuery.rows[0].password_hash);
    // if yes then don't create a new one or modify
    if (!existedUserQuery.rows[0].email_verified) {
        return res.status(404).json({ message: "Please Register first." });
    }
    if (!isPasswordMatch) {
        // unauthorized request
        return res.status(401).json({ message: "Incorrect Password!" });
    }
    // create jwt token for 15 days
    const token15days = await jwt.sign({ id: existedUserQuery.rows[0].id }, process.env.SECRET_KEY, { expiresIn: '15d' });
    return res.status(200).json({ token: token15days });
});
const getUser = asyncHandler(async (req, res) => {
    const userQuery = await pool.query(`SELECT id, username FROM users WHERE id = $1`, [req.user.id]);
    return res.status(200).json(userQuery.rows[0]);
});
const getOtherUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userQuery = await pool.query(`SELECT id, username FROM users WHERE id = $1`, [id]);
    return res.status(200).json(userQuery.rows[0]);
});
module.exports = { createUser, verifyEmail };
//# sourceMappingURL=userController.js.map