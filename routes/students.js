import express from "express";
import { studentController } from "../controllers/index.js";

const router = express.Router();

router.get("/", studentController.gettAllStudents);
router.get("/:id", studentController.gettAllStudentById);
router.post("/insert", studentController.insertStudent);
router.patch("/insert", studentController.updateStudent);
router.put("/insert", studentController.insertStudent2);

export default router;
