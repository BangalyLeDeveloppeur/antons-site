import db from "../config/db.config.js";

// ➕ Ajouter une vidéo à la galerie
export const addVideo = (titre, description, fichier_url, callback) => {
  const sql =
    "INSERT INTO videos (titre, description, fichier_url) VALUES (?, ?, ?)";
  db.query(sql, [titre, description, fichier_url], callback);
};
// 📌 Récupérer toutes les vidéos
export const getAllVideos = (callback) => {
  const sql = "SELECT * FROM videos";
  db.query(sql, callback);
};
