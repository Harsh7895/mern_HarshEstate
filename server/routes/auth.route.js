import express from "express";
import {
  google,
  signin,
  signout,
  signup,
} from "../controllers/auth.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/sign-up", signup);

router.post("/sign-in", signin);

router.post("/google", google);

router.get("/sign-out", verifyUser, signout);

export default router;
