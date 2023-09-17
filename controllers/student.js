import { body, validationResult } from "express-validator";

async function gettAllStudents(req, res) {
  res.status(200).json({
    message: "GET: All students successfully",
    data: [
      {
        id: 1,
        name: "Thanh NguyenCong",
        email: "ThanhNC40@pft.com",
        age: 24,
      },
      {
        id: 2,
        name: "Tue NguyenMinh",
        email: "TueNM3@pft.com",
        age: 25,
      },
      {
        id: 3,
        name: "Tu NguyenHoang",
        email: "TuNH8@pft.com",
        age: 18,
      },
    ],
  });
  // res.status(500).json({
  //   message: "ERROR: Couldn't get all students",
  // });
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
