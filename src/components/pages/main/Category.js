import React from "react";
import Cards from "../../partials/cards/Cards";

export default function Category({ yearData, year, seasonData, season }) {
  return (
    <div className="category">
      <div className="header-more">
        <h2>
          {year === 9999 ? "All TV Anime" : `TV Anime ${season} in ${year}`}
        </h2>

        {seasonData.length === 0 ? (
          <p>{yearData.length} Hit!</p>
        ) : (
          <p>{seasonData.length} Hit!</p>
        )}
      </div>

      <div className="cards-container">
        {seasonData.length === 0 ? (
          <Cards imgOk={yearData} />
        ) : (
          <Cards imgOk={seasonData} />
        )}
      </div>
    </div>
  );
}
