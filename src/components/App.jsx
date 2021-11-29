import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import Home from "./Home";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <div className="App">
        {/* <Nav /> */}
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/projects/:name" element={<ProjectDetail />}></Route>
        </Routes>
      </div>
    </>
  );
}
