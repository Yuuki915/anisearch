import "./Header.css";
import React from "react";

export default function Header({ hint, ShowHint, ItemCloseHandler }) {
  return (
    <div className="header">
      <h1>AniSearch</h1>

      <nav className="navbar">
        <div className="hint" onClick={ShowHint}>
          ?
        </div>
      </nav>
    </div>
  );
}
