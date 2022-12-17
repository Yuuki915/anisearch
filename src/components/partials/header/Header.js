import "./Header.css";
import React, { useState } from "react";

export default function Header() {
  const [hint, setHint] = useState(false);
  const ItemCloseHandler = () => {
    setHint(false);
  };
  const ShowHint = () => {
    setHint(!hint);
  };
  return (
    <div className="header">
      <h1>AniSearch</h1>

      <nav className="navbar">
        <div className="hint" onClick={ShowHint}>
          ?
        </div>

        <div className={`${hint ? "hint-list" : "hint-lost-off"}`}>
          <h2>Site guide</h2>

          <div className="explain">
            <p>
              This is a website "Anime search" where are all animes broadcasted
              in 2016 - 2022.
            </p>
            <h4>
              <span>●</span>Search
            </h4>
            <p>
              You can search in English and Japanese. Click the letters right
              next the search field. Will make letter's color changed and search
              in the color's language.
            </p>
            <p>
              Search field will help you to search from year / season whichever
              you chose.
            </p>

            <h4>
              <span>●</span>Favorite list
            </h4>
            <p>This is your favorite box! Add everything you love!</p>

            <h4>
              <span>●</span>Years and Seasons
            </h4>
            <p>
              You can find Animes from year and then season. Enjoy looking
              Animes up!
            </p>
          </div>
        </div>
        <div
          className={`${hint ? "hint-bg" : "no-bg"}`}
          onClick={ItemCloseHandler}
        ></div>
      </nav>
    </div>
  );
}
