import React, { useEffect, useState } from "react";
import axios from "axios";

function Video() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/videos");
      setVideos(response.data);
    } catch (err) {
      console.error(err);
      setError("Erreur lors du chargement des vidéos");
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {videos.length === 0 && <p>Aucune vidéo disponible</p>}

      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.titre}</h3>

          <video
            autoPlay
            muted
            loop
            controls
            src={`http://localhost:5000${video.fichier_url}`}
          >
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      ))}
    </div>
  );
}

export default Video;
