const createPool = require('./database_connection');
const logger = require('winston').loggers.get('default');

// Function to check if user ID already exists
async function auUniquiIdMatch(userID, tableName, generatedID) {
  const pool = await createPool();  // Ensure the pool is connected
  try {
    const result = await pool.query(`SELECT ${userID} FROM ${tableName} WHERE ${userID} = $1`, [generatedID]);
    if (result.rows.length > 0) {
      logger.info(`User ID ${generatedID} already exists in ${tableName}`);
      return true;
    }
    logger.info(`User ID ${generatedID} does not exist in ${tableName}`);
    return false;
  } catch (error) {
    logger.error(`Error checking user ID in ${tableName}: ${error.message}`);
    throw new Error('Database query failed: ' + error.message);
  }
}

// Function to assign a user ID in the database
async function auUniquiIdAssign(userID, tableName, generatedID) {
  const pool = await createPool();  // Ensure the pool is connected
  try {
    const query = `INSERT INTO ${tableName}(${userID}) VALUES ($1)`;
    await pool.query(query, [generatedID]);
    logger.info(`Assigned user ID: ${generatedID} to table ${tableName}`);
  } catch (error) {
    logger.error(`Error inserting user ID ${generatedID} into ${tableName}: ${error.message}`);
    throw new Error('Failed to assign user ID: ' + error.message);
  }
}

export { auUniquiIdMatch, auUniquiIdAssign };
