import "./Cards.css";
import React from "react";
import Card from "./Card";

export default function Cards({ imgOk }) {
  return (
    <>
      <div className="cards">
        {imgOk &&
          imgOk.map((data) => (
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
