import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import ProjectRouter from "./routes/Project.route.js";

const app = express();

await connectDB();
const allowedOrigins = ["https://portfolio-theta-smoky-22.vercel.app"];

app.use(cors({ origin: allowedOrigins[0], credentials: true }));

app.use(express.json());

app.use("/api/projects", ProjectRouter);

connectDB();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
