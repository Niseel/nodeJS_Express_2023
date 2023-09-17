import express from "express";
import * as dotenv from "dotenv";
import { usersRouter, studentsRouter } from "./routes/index.js";

dotenv.config(); // must have
const app = express();

app.use(express.json());

const PORT = process.env.PORT ?? 3000;

//routers
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/students", studentsRouter);

app.get("/", (req, res) => {
  res.send("Response: haha 1122");
});

app.listen(PORT, async () => {
  console.log(`listen on port: ${PORT}`);
});
