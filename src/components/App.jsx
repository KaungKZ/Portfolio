import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFoundPage from "./NotFoundPage";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App() {
  return (
    <>
      <ParallaxProvider>
        <div className="App">
          {/* <Nav /> */}
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/projects/:name" element={<ProjectDetail />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </ParallaxProvider>
    </>
  );
}
