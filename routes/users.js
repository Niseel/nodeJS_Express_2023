import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET: user");
});

router.post("/login", (req, res) => {
  res.send("POST: login user");
});

router.post("/register", (req, res) => {
  res.send("POST: register user");
});

// router.put("/", (req, res) => {
//     res.send("PUT: user");
// });

// router.delete("/", (req, res) => {
//     res.send("DEL: user");
// });

export default router;
