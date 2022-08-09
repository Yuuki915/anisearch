import "./Cards.css";
import React from "react";
import Card from "./Card";

export default function Cards(props) {
  const imgOk = props.imgOk;

  return (
    <>
      <div className="cards">
        {imgOk.slice(0, 7).map((data) => (
          <Card
            key={data.node.id}
            titleEn={data.node.titleEn}
            titleJp={data.node.title}
            episodes={data.node.episodesCount}
            img={data.node.image.recommendedImageUrl}
          />
        ))}
      </div>
    </>
  );
}
