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

let isConnected = false;

async function setupApp() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  return serverless(app);
}

export const handler = async (event, context) => {
  const handlerFn = await setupApp();
  return handlerFn(event, context);
};
