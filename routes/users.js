import express from "express";
import { userController, studentController } from "../controllers/index.js";
import { body } from "express-validator";

const router = express.Router();

router.get("/", userController.getAllUsers);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  userController.login
);
router.post("/register", userController.register);

export default router;
