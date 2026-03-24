import express from "express";
import multer from "multer";
import path from "path";
import JobApplication from "../models/JobApplication.js";

const router = express.Router();

// Configure Multer for resume uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc|docx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    }
    cb(new Error("Only .pdf, .doc and .docx files are allowed!"));
  }
});

// POST /api/careers/apply
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, experience, jobTitle, jobId } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: "Resume is required" });
    }

    const newApplication = new JobApplication({
      fullName,
      email,
      phone,
      experience,
      jobTitle,
      jobId,
      resumePath: `/uploads/resumes/${req.file.filename}`,
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /api/careers/applications
router.get("/applications", async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ appliedAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
