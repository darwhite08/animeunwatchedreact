import express from 'express';
import createPool from './database_connection.js'; // Import the createPool function

// Database Query Function
const bestAnimeListData = async () => {
  try {
    const pool = await createPool(); // Wait for the pool to be created
    const result = await pool.query('SELECT * FROM au_users'); // Use the pool to execute the query
    return result.rows;
  } catch (error) {
    console.error('Database query error:', error.message || error); // Log the error message
    throw new Error('Failed to fetch best anime list data'); // Throw a descriptive error
  }
};

export default bestAnimeListData;
