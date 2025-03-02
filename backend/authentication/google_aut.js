import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import auUserFetch from '../../database/user_operations/user_operations.js';
import { config } from 'dotenv';
config();



// Configure Google Strategy
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v2/userinfo",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const userEmail = profile._json.email;
        const userImage = profile._json.picture;
        const googleId = profile._json.id;
        const userName = profile.displayName;

        const result = await auUserFetch(userEmail);
        if (result?.length  == 0) {
          console.log('fghj')
          const generatedAuUserId = await userIdGenerator.user_id_generator('au_user_id', 'au_users');

          const newUser = await db.query(
            "INSERT INTO au_users (email, user_password, user_image, google_id, user_name, au_user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [userEmail, "google", userImage, googleId, userName, generatedAuUserId]
          );

          return done(null, newUser.rows[0]);
        } else {
          return done(null, result.rows[0]);
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, {
    id: user.id,
    userId: user.user_id,
    username: user.user_name,
    profile_picture: user.user_image,
    email: user.email,
    google_id: user.google_id,
    au_user_id: user.au_user_id,
  });
});

// Deserialize user
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Export Middleware Functions
const authenticateGoogle = passport.authenticate("google", { scope: ["profile", "email"] });
const handleGoogleCallback = passport.authenticate("google", {
  successRedirect: process.env.FRONTEND_REDIRECT_LINK,
  failureRedirect: "/api/redirect/login/failure",
});



export { authenticateGoogle, handleGoogleCallback };
