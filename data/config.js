import mysql from 'mysql'

const config = {
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};
const pool = mysql.createPool(config);

export default pool;