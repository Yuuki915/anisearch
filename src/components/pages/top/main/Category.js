import React from "react";
import Cards from "../../../partials/cards/Cards";

export default function Category(props) {
  const imgOk = props.imgOk;

  return (
    <div className="category">
      <div className="header-more">
        <h2>{imgOk[0].node.seasonYear}'s TV Anime</h2>
        <p className="read-more">Chack more</p>
      </div>

      <div className="cards-container">
        <Cards imgOk={props.imgOk} />
      </div>
    </div>
  );
}
