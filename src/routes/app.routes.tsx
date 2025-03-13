import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Detail from "../pages/Detail";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/message" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
