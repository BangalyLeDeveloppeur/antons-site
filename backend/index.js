import express from "express";
import cors from "cors";

import videoRoutes from "./routes/videoRoute.js";
import galerieAnimalRoute from "./routes/galerieAnimalRoute.js";

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Fichiers statiques (accès aux vidéos)
app.use("/uploads", express.static("uploads"));

// Routes API
app.use("/api/videos", videoRoutes);  
app.use("/api/galerie_animal", galerieAnimalRoute);  
// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 API dispo sur http://localhost:${PORT}`);
});
