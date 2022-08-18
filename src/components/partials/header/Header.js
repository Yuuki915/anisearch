import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>AniSearch</h1>

      <nav className="navbar">
        <Link to="/" className="link">
          Home
        </Link>
        <a href="/" className="link">
          Favorite
        </a>
        <a href="/" className="link">
          Home
        </a>
        <a href="/" className="link">
          Home
        </a>
      </nav>
    </div>
  );
}
