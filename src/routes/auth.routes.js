import { Router } from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", loginUserController);

router.post("/signup", createUserController);

export default router;
