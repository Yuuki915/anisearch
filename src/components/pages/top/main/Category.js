import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../../partials/cards/Cards";

export default function Category({ showData, year }) {
  return (
    <div className="category">
      <div className="header-more">
        <h2>{year === 9999 ? "All TV Anime" : `${year}'s TV Anime`}</h2>

        {/* <Link
          to={`/category/${showData[0] && showData[0].node.seasonYear}`}
          className="read-more"
        >
          Chack more
        </Link> */}
      </div>

      <div className="cards-container">
        <Cards imgOk={showData} />
      </div>
    </div>
  );
}
