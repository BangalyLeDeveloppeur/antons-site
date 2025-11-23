import express from "express";
import cors from "cors";

import videoRoutes from "./routes/videoRoute.js";
import galerieAnimalRoute from "./routes/galerieAnimalRoute.js";
import galeriePodgeRoute from "./routes/hodgeRoute.js";

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
app.use("/api/galerie_hodgepodge", galeriePodgeRoute);
// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 API dispo sur http://localhost:${PORT}`);
});
