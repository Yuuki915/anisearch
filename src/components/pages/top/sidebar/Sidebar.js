import React from "react";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="cat-container">
          <h4>Category</h4>
          <div className="categpries">
            <a href="/">Action</a>
            <a href="/">Love & Comedy</a>
            <a href="/">SF</a>
            <a href="/">Action</a>
            <a href="/">Action</a>
            <a href="/">Action</a>
          </div>
        </div>
    </div>
  );
}
