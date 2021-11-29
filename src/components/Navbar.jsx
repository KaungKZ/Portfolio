import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Navbar() {
  const [test, setTest] = useState([]);
  useEffect(() => {
    // console.log("rendered");
    fetch("/data/data.json")
      .then((data) => data.json())
      .then((data) => setTest(data));
  }, []);

  return (
    <div>
      <nav>
        <ul>
          {test.map((v) => {
            return (
              <li>
                <Link to={v.url} className="text-primary-default">
                  {v.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
