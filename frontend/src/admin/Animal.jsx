import React, { useState } from "react";
import axios from "axios";

function Animal() {
  const [titre, setTitre] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification correcte
    if (!image) {
      alert("Veuillez sélectionner une image");
      return;
    }

    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/galerie_animal", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Image ajoutée avec succès !");
      setTitre("");
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout de l'image.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0">Ajouter image sur la table animal</h2>
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
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
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

export default Animal;