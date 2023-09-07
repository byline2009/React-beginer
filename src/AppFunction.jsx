import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WrapperLayout from "./components/WrapperLayout";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
function AppFunction() {
  return (
    <div className="main-layout">
      <BrowserRouter>
        <Routes>
          <Route element={<WrapperLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="blog" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppFunction;
