import React, { useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="text-primary-default">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects/ggg" className="text-primary-default">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
      so you can think about this <Outlet> as a placeholder for
      the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
