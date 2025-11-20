import React, { useEffect, useState } from "react";
import axios from "axios";

function Video() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction pour fetch les vidéos
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/videos");
        setVideos(response.data); 
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement des vidéos");
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <p>Chargement des vidéos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Liste des vidéos</h2>
      {videos.length === 0 && <p>Aucune vidéo disponible</p>}

      {videos.map((video) => (
        <div key={video.id} style={{ marginBottom: "20px" }}>
          <h3>{video.titre}</h3>
          <p>{video.description}</p>

          <video src={`http://localhost:5000${video.fichier_url}`}
          >
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      ))}
    </div>
  );
}

export default Video;
