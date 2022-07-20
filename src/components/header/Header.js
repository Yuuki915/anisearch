import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../header/Header.css";

export default function Header() {
  const [search, setSearch] = useState("");
  const searchValue = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div className="header">
      <h1>AniSearch</h1>

      <form className="search-form">
        <input
          name="search"
          type={"text"}
          onInput={searchValue}
          className="search-input"
        />
        <input name="submit" type={"submit"} className="search-submit" />
      </form>

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
