import React from "react";
import Cards from "../cards/Cards";
import Sidebar from "../sidebar/Sidebar";

export default function CategoriesPage() {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="main">
        <h2>Cat Name</h2>
        <Cards />
      </div>
    </div>
  );
}
