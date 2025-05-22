import ProjectModel from "../models/Project.model.js";
import { v2 as cloudinary } from "cloudinary";
import connectCloudinary from "../cloudinary.js";
export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find({});

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Custom error" });
  }
};

export const addProject = async (req, res) => {
  try {
    const data = JSON.parse(req.body.projectData);

    const image = req.file;

    await connectCloudinary();

    const uploadResult = await cloudinary.uploader.upload(image.path, {
      folder: "portfolio-projects",
    });

    const newProject = await ProjectModel.create({
      ...data,
      technologies: data.technologies.split(","),
      image: uploadResult.secure_url,
    });

    res.status(201).json({ message: "Project uploaded successfully." });
  } catch (error) {
    console.error("Error uploading project:", error);
    res.status(500).json({ error: "Failed to add project" });
  }
};
