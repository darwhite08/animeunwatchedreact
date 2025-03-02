import express from 'express';
import path from 'path';
import createPool from '../database_connection.js';

let pool;

// Initialize the pool instance
(async () => {
  try {
    pool = await createPool(); // Wait for the pool to be created
    console.log('Database connection pool created successfully');
  } catch (error) {
    console.error('Error creating database connection pool:', error.message || error);
    process.exit(1); // Exit the application if the pool can't be created
  }
})();

// Database Query Function to Fetch User by Email
async function auUserFetch(email) {
  try {
    if (!pool) throw new Error('Database connection pool is not initialized');
    const result = await pool.query('SELECT * FROM au_users WHERE email=$1', [email]);
    return result;
  } catch (error) {
    console.error('Database query error (auUserFetch):', error.message || error);
    throw new Error('Failed to fetch user from database');
  }
}

// Placeholder for Inserting User
const auUserInsert = async () => {
  console.log('auUserInsert is not implemented yet');
};

export default auUserFetch;
