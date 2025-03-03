import express from 'express';
import cors from 'cors';
import session from 'express-session';
import bestAnimeListRouter from './backend/routes/best_anime_list/bestAnimeRoutes.js';
import authRoutes from './backend/routes/authRoutes.js'
import redirectRoutes from './backend/routes/redirect_routes.js';
import blogPostHandle from './backend/blog/route/blog_post_handle.js';
import blogGetHandle from './backend/blog/route/blog_get_handle.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Include credentials like cookies or authorization headers
}));


app.use(
  session({
    secret: "your-secret-key", // Replace with a secure key
    resave: false, // Avoid resaving the session if it hasn't changed
    saveUninitialized: true, // Save uninitialized sessions
    cookie: { secure: false }, // Use true if using HTTPS
  })
);

// Use routes

// Mount Additional Auth Routes
app.use(authRoutes); 
app.use(redirectRoutes)
app.use( bestAnimeListRouter);
app.use(blogPostHandle)
app.use(blogGetHandle);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
