import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-2xl font-title text-primary-default h-[calc(100vh-144px)] flex items-center justify-center not-found-page">
      This page does not exist (yet ?),
      <Link to="/" className="underline ml-2">
        take me to home page
      </Link>
    </div>
  );
}
