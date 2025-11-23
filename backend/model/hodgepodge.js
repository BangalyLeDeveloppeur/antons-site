import db from "../config/db.config.js";

// ➕ Ajouter une vidéo à la galerie
export const addGaleriePodge = (titre, image_url, callback) => {
  const sql =
    "INSERT INTO galerie_hodgepodge (titre, image_url) VALUES (?, ?)"; // CORRECTION: ajout du "g"
  db.query(sql, [titre, image_url], callback);
};

// 📌 Récupérer toutes les vidéos
export const getAllGaleriePodge = (callback) => {
  const sql = "SELECT * FROM galerie_hodgepodge";
  db.query(sql, callback);
};