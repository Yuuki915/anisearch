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
        <Link to="/favorite" className="link">
          Favorite
        </Link>
      </nav>
    </div>
  );
}
