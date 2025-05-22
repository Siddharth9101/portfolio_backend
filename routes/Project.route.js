import { Router } from "express";
import { addProject, getProjects } from "../controllers/Project.controller.js";
import { upload } from "../multer.js";

const router = Router();

router.get("/", getProjects);
router.post("/", upload.single("image"), addProject);

export default router;
