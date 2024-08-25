import express from "express";
import { Router } from "express";
import isAuth from "../isAuth.js";

const router = Router();


router.get("/", isAuth, (req, res) => {
  const user = {
    ...req.user,
    loggedIn: true,
  };
  res.json(user);
});

export default router;
