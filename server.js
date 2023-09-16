import express from "express";
import * as dotenv from "dotenv";
import usersRouter from "./routes/users.js";

dotenv.config(); // must have
const app = express();

const PORT = process.env.PORT ?? 3000;

//routers
app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Response: haha 1122");
});

app.listen(PORT, async () => {
  console.log(`listen on port: ${PORT}`);
});
