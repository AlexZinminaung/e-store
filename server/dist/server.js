"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
require('dotenv').config();
const { connectDb } = require('./configs/database');
const app = express();
const PORT = 3000;
// using middleware
app.use(express.json());
// using routes
app.use('/api/user', require('./routes/userRoute'));
// conectDb
connectDb();
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
module.exports = app;
//# sourceMappingURL=server.js.map