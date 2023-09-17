import { body, validationResult } from "express-validator";

async function gettAllStudents(req, res) {
  res.send("GET: All Students haha");
}

async function gettAllStudentById(req, res) {
  res.send("GET: Student by ID: " + req?.params?.id ?? 1);
}

async function insertStudent(req, res) {
  res.send("POST: Insert Student");
}

async function insertStudent2(req, res) {
  res.send("PUT: (update object if exists) insert student");
}

async function updateStudent(req, res) {
  res.send("PATCH: (create new object if not exists) insert student");
}

export default {
  gettAllStudents,
  gettAllStudentById,
  insertStudent,
  insertStudent2,
  updateStudent,
};
