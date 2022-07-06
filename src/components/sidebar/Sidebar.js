import React from "react";

import "../sidebar/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="cat-container">
          <p>Category</p>
          <div className="categpries">
            <p>Action</p>
            <p>Love & Comedy</p>
            <p>SF</p>
            <p></p>
            <p>Action</p>
            <p>Action</p>
          </div>
        </div>
      </div>
    </div>
  );
}
