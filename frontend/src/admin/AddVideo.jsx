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
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">Ajouter une vidéo</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Titre"
                    className="form-control"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    placeholder="Description"
                    className="form-control"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    accept="video/*"
                    onChange={(e) => setVideo(e.target.files[0])}
                    required
                  />
                  <div className="form-text">
                    Formats acceptés: MP4, AVI, MOV, etc.
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Uploader
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;