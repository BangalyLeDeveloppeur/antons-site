import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Asset/layout/layout";
import AddVideo from "./admin/addVideo";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<AddVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
