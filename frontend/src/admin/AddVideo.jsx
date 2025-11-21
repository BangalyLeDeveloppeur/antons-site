import React, { useState } from "react";
import axios from "axios";

function AddVideo() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) {
      alert("Veuillez sélectionner une vidéo");
      return;
    }

    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    formData.append("video", video);

    try {
      await axios.post("http://localhost:5000/api/videos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Vidéo ajoutée avec succès !");
      setTitre("");
      setDescription("");
      setVideo(null);

    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout de la vidéo.");
    }
  };

  return (
    <div>
      <h2>Ajouter une vidéo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          required
        />

        <button type="submit">Uploader</button>
      </form>
    </div>
  );
}

export default AddVideo;
