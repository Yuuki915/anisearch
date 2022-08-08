import React from "react";
import Card from "./Card";

import "./Cards.css";

export default function Cards(props) {
  return (
    <>
      <div className="cards">
        <Card
          titleEn={props.titleEn}
          titleJp={props.titleJp}
          seasons={props.seasons}
          episodes={props.episodes}
          img={props.img}
        />
      </div>
    </>
  );
}
