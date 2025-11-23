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
    <div className="video-contenaire">
      {error && <p>{error}</p>}
      {videos.length === 0 && <p>Aucune vidéo disponible</p>}

      {videos.map((video) => (
        <div key={video.id}>
          <h1 className="titre-anton">{video.titre}</h1>

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
     <button className="btn btn-primary btnit ">INSTAGRAM</button>
    </div>
  );
}

export default Video;
