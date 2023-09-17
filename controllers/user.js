import { validationResult } from "express-validator";

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  res.status(200).json({
    message: "POST: login user",
    data: {
      id: 1,
      name: getName(email),
      email: email,
      age: 24,
    },
  });
};

const register = async (req, res) => {
  res.send("POST: register user");
};

const getDetailUser = async (req, res) => {
  res.send("GET: User by id");
};

const getAllUsers = async (req, res) => {
  res.send("GET: Get all users");
};

const getName = (email) => {
  return email.split("@")[0];
};

export default {
  login,
  register,
  getDetailUser,
  getAllUsers,
};
