import type {Request, Response} from 'express'
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const { pool } = require('../configs/database');
const { sendVerification } = require('../utils/verifiler');

// register a new user

const createUser = asyncHandler( async (req: Request, res: Response) => {
    
    const { name, email, password } = req.body || {};
    
    // check if user provide data
    if (!name || !email || !password)
    {
        return res.status(400).json({message: "Fill Required Data!"});
    }

    // check if passwor is long enough 
    if (password.length < 8) return res.status(400).json({message: "User password is must be 8 letter at least!"});
    const hashPassword = await bcrypt.hash(password, 10);

    // check if user already exist in database
    const existingUserQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUserQuery.rows.length > 0)
    {
        // check if email is verified
        const existUser = existingUserQuery.rows[0];
        if (existUser.isVerified)
        {
            return res.status(400).json({message: "User Already Exist!"});
        }

        // update password for unverified email (user)
        await pool.query("UPDATE users SET password_hash = $1 WHERE email = $2", [hashPassword, email])
        await sendVerification(email, 'token');
        return res.status(200).json({message: "Password is Updated"})
        
    }
    // create new user
    const newUserQuery = await pool.query("INSERT INTO users (email, name, password_hash) VALUES ($1, $2, $3)", [email, name, hashPassword]);
    await sendVerification(email, 'token');
    return res.status(200).json({message: "User is Created"})
    

    
    
})


module.exports = { createUser }