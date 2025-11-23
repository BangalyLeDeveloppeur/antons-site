import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Asset/layout/layout";
import Admin from "./pages/Admin";


const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
