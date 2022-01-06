import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
// import MyPDF from "../assets/resumev7.pdf";

export default function Navbar() {
  return (
    <div className="navbar h-36 flex items-center section-fixed-width">
      <nav className=" w-full">
        <ul className="flex justify-between items-center">
          <li>
            <Link
              to="/"
              className="text-primary-default flex flex-col navbar__logo-link"
            >
              <img src={logo} alt="logo" className="navbar__logo opacity-50" />
              <img src={logo} alt="logo" className="navbar__logo mt-1 mb-1" />
              <img src={logo} alt="logo" className="navbar__logo opacity-50" />
            </Link>
          </li>
          <li>
            <Link
              to="/resumev7.pdf"
              target="_blank"
              download="Resume.pdf"
              className="download-resume border-button text-primary-default w-[250px]"
            >
              Download Resume
              <svg>
                <rect
                  x="0"
                  y="0"
                  fill="none"
                  width="100%"
                  height="100%"
                  className="stroke-[#58d9a5]"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
