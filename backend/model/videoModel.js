import db from "../config/db.config.js";

// ➕ Ajouter une image à la galerie
export const addVideo = (titre, description, fichier_url, callback) => {
  const sql =
    "INSERT INTO video (titre, description, fichier_url) VALUES (?, ?,?)";
  db.query(sql, [titre, description, fichier_url], callback);
};

// 📌 Récupérer toutes les videos de la table video
export const getAllVideo = (callback) => {
  const sql = "SELECT * FROM video";
  db.query(sql, callback);
};
