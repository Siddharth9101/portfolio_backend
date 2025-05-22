import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import ProjectRouter from "./routes/Project.route.js";

const app = express();
const port = process.env.PORT || 3000;

await connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

app.use("/api/projects", ProjectRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
