"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require('express');
const { connectDb } = require('./configs/database');
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;
// using middleware
app.use(express.json());
app.use(cookieParser());
// using routes
app.use('/api/user', require('./routes/userRoute'));
// conectDb
connectDb();
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
module.exports = app;
//# sourceMappingURL=server.js.map