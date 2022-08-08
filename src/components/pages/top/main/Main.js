import React, { useState } from "react";
import Cards from "../../../partials/cards/Cards";
import Category from "./Category";

import "./Main.css";

export default function Main(props) {
  // const cards = { cat: "new", title: "Title", seasons: 3, episode: 68 };
  

  return (
    <div className="main">
      <Category imgOk={props.imgOk} />
      {/* {imgOk.slice(0, 10).map((data) => (
        <Cards
          key={data.node.id}
          titleEn={data.node.titleEn}
          titleJp={data.node.title}
          episodes={data.node.episodesCount}
          img={data.node.image.recommendedImageUrl}
        />
      ))} */}
    </div>
  );
}
