import dotenv from "dotenv";
dotenv.config();
import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import connectDB from "./db.js";
import ProjectRouter from "./routes/Project.route.js";

const app = express();

await connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

app.use("/api/projects", ProjectRouter);

connectDB();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
