import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import ProjectRouter from "./routes/Project.route.js";

const app = express();

await connectDB();

app.use(
  cors({
    origin: "https://portfolio-theta-smoky-22.vercel.app",
    methods: "GET,POST",
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use("/api/projects", ProjectRouter);

app.get("/", (req, res) => res.send("BACKEND IS RUNNING"));

export default app;
