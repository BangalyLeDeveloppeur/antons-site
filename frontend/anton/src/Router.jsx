import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ajoute tes routes ici */}
        {/* Exemple :
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Galerie />} />
          */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
