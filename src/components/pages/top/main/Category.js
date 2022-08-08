import React from "react";
import Cards from "../../../partials/cards/Cards";

export default function Category(props) {
  const imgOk = props.imgOk;
  // imgOk.map((item) => console.log(item));

  return (
    <div className="category">
      <h2>{imgOk[0].node.seasonYear}'s TV Anime</h2>

      <div className="cards-container">
        {imgOk.slice(0, 7).map((data) => (
          <Cards
            key={data.node.id}
            titleEn={data.node.titleEn}
            titleJp={data.node.title}
            episodes={data.node.episodesCount}
            img={data.node.image.recommendedImageUrl}
          />
        ))}
      </div>
    </div>
  );
}
