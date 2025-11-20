import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { uploadvideo, fetchVideo } from "../conroller/acceuilvideoControle.js";
// import { verifyToken } from "../middLeware/AuthMiddlewere.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// --- Configuration du stockage Multer ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/videos")); // dossier vidéos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// --- Filtre pour accepter uniquement les vidéos ---
const videoFilter = (req, file, cb) => {
  const allowed = ["video/mp4", "video/mkv", "video/avi", "video/webm"];

  if (!allowed.includes(file.mimetype)) {
    return cb(new Error(" Seuls les fichiers vidéo sont acceptés !"), false);
  }
  cb(null, true);
};

// Multer final
const upload = multer({
  storage,
  fileFilter: videoFilter,
});

// --- Routes ---
router.post("/", upload.single("video"), uploadvideo);
router.get("/", fetchVideo);

export default router;
