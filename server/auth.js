import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import env from "dotenv";
import db from "./db.js";
env.config();


passport.use("google",new GoogleStrategy({
  clientID:process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:"http://localhost:8323/auth/google/callback",
  scope: ["profile", "email"],
},
async(accessToken,refreshToken,profile,done)=>{
  try {
    let user = {};
    const userExistence = await db.query("SELECT id FROM patient_dtls WHERE email=$1",[profile.email]);
    if(userExistence.rows.length === 0){
      const newUser = await db.query("INSERT INTO patient_dtls(email) VALUES($1)",[profile.email]);
      const id = await db.query("SELECT id FROM patient_dtls WHERE email=$1",[profile.email]);
      user={
        id : id.rows[0].id,
      };
      return done(null,newUser.rows[0]);
    }
    else{
      user={
        id : userExistence.rows[0].id,
      }
      return done(null,userExistence.rows[0]);
    }
  } catch (error) {
    return done(error);
  }
}
))

passport.serializeUser((user, done) => {
  // loads into req.session.passport.user
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // loads into req.user
  done(null, user);
});



