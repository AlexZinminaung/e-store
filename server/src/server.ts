require('dotenv').config();
const express = require('express')
const { connectDb } = require('./configs/database')
const cookieParser = require("cookie-parser");
const cors = require('cors');
const app = express()
const PORT = 3000


// using middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json())
app.use(cookieParser());

// using routes
app.use('/api/user', require('./routes/userRoute'));

// conectDb
connectDb();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

module.exports = app