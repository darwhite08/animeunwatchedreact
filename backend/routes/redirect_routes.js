import express from 'express';
import { config } from 'dotenv';
config();

const redirectRoutes = express.Router();

// Define routes
redirectRoutes.get('/api/auth/status', (req, res) => {
    const user = req.user; 
    res.status(200).json({
        isAutherized:true
    });
  });
  
  redirectRoutes.get('/api/redirect/login/failure', (req, res) => {
    res.status(301).redirect(process.env.FRONTEND_REDIRECT_LINK);
  });
  

export default redirectRoutes;
