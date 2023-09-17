import { validationResult } from "express-validator";
import { userRepository } from "../repositories/index.js";
import { EventEmitter } from "node:events";

const myEvent = new EventEmitter();
// listen
myEvent.on("event.register.user", (params) => {
  console.log(`They talk about: ${JSON.stringify(params)}`);
});

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  // Call Repositories
  await userRepository.login({ email, password });

  res.status(200).json({
    message: "POST: login user - from Repositories",
    data: {
      id: 1,
      name: getName(email),
      email: email,
      age: 24,
    },
  });
};

const register = async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body;
  // Call Repositories
  await userRepository.register({
    name,
    password,
    phoneNumber,
    address,
    email,
  });

  myEvent.emit("event.register.user", { address, email });
  res.status(201).json({
    message: "POST: Register user successfully",
  });
};

// Event Emitter
// Khi 1 req, event xay ra
// Muon thong bao voi func khac de bat Event do va lam viec khac

const getDetailUser = async (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({
    message: "GET: User by id",
    data: {
      name: getName(email),
      email: email,
    },
  });
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
