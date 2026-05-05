"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const { pool } = require('../configs/database');
const { sendVerification } = require('../utils/verifiler');
const jwt = require('jsonwebtoken');
// register a new user
const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body || {};
    // check if user provide data
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Fill Required Data!" });
    }
    // check if passwor is long enough 
    if (password.length < 8)
        return res.status(400).json({ message: "User password is must be 8 letter at least!" });
    const hashPassword = await bcrypt.hash(password, 10);
    // check if user already exist in database
    const existingUserQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUserQuery.rows.length > 0) {
        // check if email is verified
        const existUser = existingUserQuery.rows[0];
        if (existUser.isVerified) {
            return res.status(400).json({ message: "User Already Exist!" });
        }
        // update password for unverified email (user)
        await pool.query("UPDATE users SET password_hash = $1 WHERE email = $2", [hashPassword, email]);
        // create token for 5 min 
        const token5min = jwt.sign({ id: existUser.id }, process.env.JWT_KEY, { expiresIn: "5m" });
        await sendVerification(email, token5min);
        return res.status(200).json({ message: "Password is Updated" });
    }
    // create new user
    const newUserQuery = await pool.query("INSERT INTO users (email, name, password_hash) VALUES ($1, $2, $3) RETURNING *", [email, name, hashPassword]);
    const newUser = newUserQuery.rows[0];
    // create token for 5 min 
    const token5min = jwt.sign({ id: newUser.id }, process.env.JWT_KEY, { expiresIn: "5m" });
    await sendVerification(email, token5min);
    return res.status(200).json({ message: "User is Created" });
});
// to verify email
const verifyEmail = asyncHandler(async (req, res) => {
    // check if token exist
    const { token } = req.params;
    if (!token)
        return res.status(404).json({ message: "Token not found" });
    // verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // verify email in database
        await pool.query("UPDATE users SET is_verified = true WHERE id = $1", [decoded.id]);
        return res.status(200).json({ message: "verify" });
    }
    catch (err) {
        console.log('Error verifying Token');
        console.error(err.message);
        res.status(400).json(err);
    }
});
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body || {};
    // check if user provide data
    if (!email || !password) {
        return res.status(400).json({ message: "Fill Required Data!" });
    }
    // check if user already exist in database
    const existingUserQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUserQuery.rows.length < 1) {
        return res.status(404).json({ message: "User not founded in database!" });
    }
    const existingUser = existingUserQuery.rows[0];
    if (!existingUser.is_verified) {
        return res.status(404).json({ message: "User not founded in database!" });
    }
    // check password corect
    const isPasswordMatch = await bcrypt.compare(password, existingUser.password_hash);
    if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid credentials!" });
    }
    // create token 
    const token10days = jwt.sign({ id: existingUser.id }, process.env.JWT_KEY, { expiresIn: "10d" });
    res.cookie("access_token", token10days, {
        httpOnly: true, // JS cannot access it
        secure: process.env.NODE_ENV === "production", // HTTPS only (use false in development)
        sameSite: "strict", // protects against CSRF
        maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days in milliseconds
    });
    return res.status(200).json({ message: "Login successful" });
});
// fecth user data
const getUser = asyncHandler(async (req, res) => {
    const userId = req.user?.id;
    return res.status(200).json(userId);
});
module.exports = { createUser, verifyEmail, loginUser, getUser };
//# sourceMappingURL=userController.js.map