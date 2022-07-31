import React, { useState } from "react";
import Cards from "../cards/Cards";

import "../main/Main.css";

export default function Main(props) {
  const cards = { cat: "new", title: "Title", seasons: 3, episode: 68 };
  const data = props.animeData;
  console.log(data);

  return (
    <div className="main">
      <Cards
        new={cards.cat}
        title={cards.title}
        seasons={cards.seasons}
        episode={cards.episode}
      />
      <Cards
        new={cards.cat}
        title={cards.title}
        seasons={cards.seasons}
        episode={cards.episode}
      />
      <Cards
        new={cards.cat}
        title={cards.title}
        seasons={cards.seasons}
        episode={cards.episode}
      />
    </div>
  );
}
