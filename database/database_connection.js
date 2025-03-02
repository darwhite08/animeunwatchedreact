import { config } from 'dotenv';
import winston from 'winston';
import pkg from 'pg';

const { Pool } = pkg;

// Load environment variables
config();

// Logger setup using Winston for better logging
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

// Function to create a new database connection pool with retry logic
const createPool = () => {
  const maxRetries = parseInt(process.env.DB_MAX_RETRIES) || 5;
  const retryDelay = parseInt(process.env.DB_RETRY_DELAY) || 2000; // in ms

  if (!process.env.PG_USER || !process.env.PG_HOST || !process.env.PG_DATABASE || !process.env.PG_PASSWORD) {
    logger.error('Missing required environment variables for database connection');
    throw new Error('Missing required environment variables for database connection');
  }

  const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT || 5432, // Default to 5432 if no port provided
    ssl: process.env.PG_SSL === 'true' ? { rejectUnauthorized: false } : undefined
  });

  let attempts = 0;

  // Retry logic with exponential backoff
  const tryConnecting = async () => {
    try {
      await pool.connect();
      logger.info('Successfully connected to the database');
      return pool;
    } catch (error) {
      attempts++;
      // Log the error message, code, and stack trace to understand the failure
      logger.error(`Database connection failed. Attempt ${attempts}/${maxRetries}. Error message: ${error.message}`);
      logger.error(`Error Code: ${error.code}`);
      logger.error(`Error Detail: ${error.detail ? error.detail : 'No additional details'}`);
      
      // Provide additional context about the failure
      if (error.code) {
        logger.error(`Error code ${error.code} may indicate a specific issue like authentication failure, network issues, or incorrect database configuration.`);
      }

      if (attempts < maxRetries) {
        // Exponential backoff for retry delay
        const delay = retryDelay * Math.pow(2, attempts);
        logger.warn(`Retrying in ${delay / 1000} seconds...`);
        setTimeout(() => tryConnecting(), delay);
      } else {
        logger.error('Max database connection retries reached');
        logger.error(`Stack trace: ${error.stack}`);
        throw new Error('Failed to connect to the database after multiple attempts');
      }
    }
  };

  return tryConnecting();
};

export default createPool;
