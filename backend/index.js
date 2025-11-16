import express from "express";
import cors from "cors";

import videoRoutes from "./routes/videoRoute.js";



const app = express();
const PORT = 5000;





// Fichiers statiques
app.use("/uploads", express.static("uploads"));

// Routes API
app.use("/api/equipe", videoRoutes);

// Lancer le serveur
app.listen(PORT, () =>
  console.log(`🚀 API dispo sur http://localhost:${PORT}`)
);
