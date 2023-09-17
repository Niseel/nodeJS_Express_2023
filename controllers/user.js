import { validationResult } from "express-validator";

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  res.send("POST: login user");
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

export default {
  login,
  register,
  getDetailUser,
  getAllUsers,
};
