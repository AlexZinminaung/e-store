const pg = require('pg');

const { Pool } = pg;
const connectionString = process.env.DB_URL
const pool = new Pool({
  connectionString,
})

const connectDb = async () => {
    try {
        const client = await pool.connect()
        console.log('Connected to Database.')
        client.release()
    }
    catch (err: any)
    {
        console.log('Error connect DB!');
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = { pool, connectDb };