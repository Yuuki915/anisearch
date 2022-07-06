import React from "react";
import Cards from "../cards/Cards";

import "../main/Main.css";

export default function Main() {
  const cards = { cat: "new", title: "Title", seasons: 3, episode: 68 };

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
