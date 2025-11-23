import { addGaleriePodge, getAllGaleriePodge } from "../model/hodgepodge.js";

// 📌 Fonction pour ajouter video dans la table video
export const uploadGaleriePodge = (req, res) => {
  const { titre } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "⚠️ Aucune image n'a été envoyée" });
  }
  const GaleriePodge = `/uploads/${req.file.filename}`;
  addGaleriePodge(titre, GaleriePodge, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    return res.status(201).json({
      id: result.insertId,
      message: "✅ Galerie ajoutée avec succès !",
      titre,
      image_url: GaleriePodge, // CORRECTION: utiliser GaleriePodge au lieu de GalerieAnimal
    });
  });
};

// 📌 Fonction pour récupérer les video dans la table video
export const fetchGaleriePodge = (req, res) => {
  getAllGaleriePodge((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};