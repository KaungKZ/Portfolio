import React from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFoundPage from "./NotFoundPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ParallaxProvider } from "react-scroll-parallax";

const routes = [
  { path: "/", Component: Home, exact: true },
  { path: "/projects/:name", Component: ProjectDetail, exact: false },
  { path: "*", Component: NotFoundPage, exact: false },
];

export default function App() {
  const location = useLocation();

  return (
    <>
      <ParallaxProvider>
        <div className="App">
          {/* <Nav /> */}
          <Navbar />
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes location={location}>
                <Route index path="/" element={<Home />}></Route>
                <Route
                  path="/projects/:name"
                  element={<ProjectDetail />}
                ></Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </ParallaxProvider>
    </>
  );
}
