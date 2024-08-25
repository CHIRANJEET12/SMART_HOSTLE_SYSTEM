import express from "express";
import { Router } from "express";
import passport from "passport";

const router = Router();

// Use router.get() instead of app.get()
// router.get("/", (req, res) => {
//   res.send("Auth");
// });


router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: true }),
  (_, res) => {
    res.redirect(`${process.env.CLIENT_URL}/Home`);
  }
);

export default router;
