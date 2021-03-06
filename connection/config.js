require('dotenv').config();

const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "mypassword",
  database: process.env.DATABASE_NAME || "dblinks",
};

module.exports = database;

 