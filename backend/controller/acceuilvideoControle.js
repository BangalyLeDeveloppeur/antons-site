import { addVideo, getAllVideos } from "../model/videoModel.js";

// 📌 Fonction pour ajouter video dans la table video
export const uploadvideo = (req, res) => {
  const { titre, description } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "⚠️ Aucune video n'a été envoyée" });
  }
  const videoPath = `/uploads/videos/${req.file.filename}`;
  addVideo(titre, description, videoPath, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    return res.status(201).json({
      id: result.insertId,
      message: "✅ Galerie ajoutée avec succès !",
      titre,
      description,
      fichier_url: videoPath,
    });
  });
};
// 📌 Fonction pour récupérer les video dans la table video
export const fetchVideo = (req, res) => {
  getAllVideos((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
