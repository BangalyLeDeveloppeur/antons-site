import db from "../config/db.config.js";

// ➕ Ajouter une vidéo à la galerie
export const addGalerieAnimal = (titre, image_url, callback) => {
  const sql =
    "INSERT INTO galerie_animal (titre, image_url) VALUES (?, ?)";
  db.query(sql, [titre, image_url], callback);
};
// 📌 Récupérer toutes les vidéos
export const getAllGalerieAnimal = (callback) => {
  const sql = "SELECT * FROM galerie_animal";
  db.query(sql, callback);
};
