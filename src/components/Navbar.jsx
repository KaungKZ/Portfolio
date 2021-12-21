import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  // const [test, setTest] = useState([]);
  // useEffect(() => {
  //   fetch("/data/data.json")
  //     .then((data) => data.json())
  //     .then((data) => setTest(data));
  // }, []);

  return (
    <div className="navbar h-36 flex items-center section-fixed-width">
      <nav className=" w-full">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="text-primary-default flex flex-col">
              <img src={logo} alt="logo" className="navbar__logo opacity-50" />
              <img src={logo} alt="logo" className="navbar__logo mt-1 mb-1" />
              <img src={logo} alt="logo" className="navbar__logo opacity-50" />
            </Link>
          </li>
          <li>
            <a className="border-button text-primary-default w-[250px]">
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
            </a>
          </li>
          {/* {test.map((v) => {
            return (
              <li>
                <Link to={v.url} className="text-primary-default">
                  {v.name}
                </Link>
              </li>
            );
          })} */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
