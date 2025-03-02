import express, { response } from 'express';
import { authenticateGoogle, handleGoogleCallback } from '../authentication/google_aut.js'; // Import Passport middleware

const router = express.Router();

router.get('/api/auth/google', authenticateGoogle);
router.get('/api/auth/google/secrets', handleGoogleCallback);
export default router;
