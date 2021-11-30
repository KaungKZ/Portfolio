import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import { logo } from "../../public/images/logo.png";

export default function Navbar() {
  // const [test, setTest] = useState([]);
  // useEffect(() => {
  //   fetch("/data/data.json")
  //     .then((data) => data.json())
  //     .then((data) => setTest(data));
  // }, []);

  return (
    <div>
      <nav>
        <ul className="flex">
          <li>
            <Link to="/" className="text-primary-default">
              <img src="/images/logo.png" alt="" />
            </Link>
          </li>
          <li>
            <button className="border border-primary-default text-primary-default p-2 m-5">
              Download Resume
            </button>
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
