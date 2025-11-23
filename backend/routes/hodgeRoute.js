import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  uploadGaleriePodge,
  fetchGaleriePodge,
} from "../controller/hodgepodge.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// --- Configuration du stockage Multer ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// --- Filtre pour accepter uniquement les IMAGES ---
const imageFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

  if (!allowed.includes(file.mimetype)) {
    return cb(
      new Error("⚠️ Seules les images (jpg, png, webp) sont acceptées !"),
      false
    );
  }
  cb(null, true);
};

// Multer final
const upload = multer({
  storage,
  fileFilter: imageFilter,
});


// --- Routes PODGE ---
router.post("/", upload.single("image"), uploadGaleriePodge);
router.get("/", fetchGaleriePodge);

export default router;