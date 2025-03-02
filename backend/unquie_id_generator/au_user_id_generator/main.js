const { v4: uuidv4 } = require('uuid');  // For UUID generation
const crypto = require('crypto');
const logger = require('winston').loggers.get('default');

// Enum for User ID formats
const UserIdFormats = {
  UUID: 'uuid',
  RANDOM: 'random',
  CUSTOM: 'custom'
};

// Advanced function to generate user IDs in various formats
function generateUserId(format = UserIdFormats.UUID, length = 16) {
  switch (format) {
    case UserIdFormats.UUID:
      const uuid = uuidv4().replace(/-/g, '').slice(0, length); // Trim UUID to specified length
      return `AUID${uuid}`;

    case UserIdFormats.RANDOM:
      let randomNumber = '';
      while (randomNumber.length < length) {
        randomNumber += Math.floor(Math.random() * 10).toString();
      }
      return `AUID${randomNumber}`;

    case UserIdFormats.CUSTOM:
      return `AUID${crypto.randomBytes(length / 2).toString('hex')}`;

    default:
      logger.warn(`Unknown ID format ${format}, using default UUID`);
      return `AUID${uuidv4().replace(/-/g, '').slice(0, length)}`;
  }
}

// Exporting formats for easier usage
module.exports = { generateUserId, UserIdFormats };
