import { addGalerieAnimal, getAllGalerieAnimal } from "../model/galerieAnimal.js";

// 📌 Fonction pour ajouter video dans la table video
export const uploadGalerieAnimal= (req, res) => {
  const { titre } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "⚠️ Aucune image n'a été envoyée" });
  }
  const GalerieAnimal = `/uploads/${req.file.filename}`;
  addGalerieAnimal(titre,GalerieAnimal, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    return res.status(201).json({
      id: result.insertId,
      message: "✅ Galerie ajoutée avec succès !",
      titre,
      image_url: GalerieAnimal,
    });
  });
};
// 📌 Fonction pour récupérer les video dans la table video
export const fetchGalerieAnimal = (req, res) => {
  getAllGalerieAnimal((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
