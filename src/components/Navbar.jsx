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
    <div className="navbar h-36  flex items-center">
      <nav className=" w-full">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="text-primary-default flex flex-col">
              <img src={logo} alt="logo" className="navbar__logo" />
              <img src={logo} alt="logo" className="navbar__logo mt-1 mb-1" />
              <img src={logo} alt="logo" className="navbar__logo" />
            </Link>
          </li>
          <li>
            <a className="navbar__download h-[45px] text-primary-default py-2 px-2 flex items-center justify-center w-full font-title font-semibold text-lg">
              Download Resume
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
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
