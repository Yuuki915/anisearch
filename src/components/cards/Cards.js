import React from "react";
import Card from "./Card";

import "../cards/Cards.css";

export default function Cards(props) {
  return (
    <div className="cards-container">
      <h2>{props.new}</h2>
      <div className="cards">
        <Card
          title={props.title}
          seasons={props.seasons}
          episode={props.episode}
        />
        <Card
          title={props.title}
          seasons={props.seasons}
          episode={props.episode}
        />
      </div>
    </div>
  );
}
