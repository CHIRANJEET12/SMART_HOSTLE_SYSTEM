import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = process.env.PORT;
env.config();


app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    cookie: {
      secure: process.env.NODE_ENV === "production" ? "true" : "auto",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
    resave: false,
    saveUninitialized: false,
  })
);


app.use(passport.initialize());
app.use(passport.session());

// Importing the routers using ES module syntax
import indexRouter from './router/indexRouter.js';  // Use indexRouter instead of router
import authRouter from "./router/authRouter.js";  // Use authRouter instead of router
import "./auth.js";

// Using the routers in the app
app.use("/", indexRouter);  // Use indexRouter here
app.use("/auth", authRouter);  // Use authRouter here

app.listen(port || 8000, () => console.log(`Server is running on ${port || 8000}`));
