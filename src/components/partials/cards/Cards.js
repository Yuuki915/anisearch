import "./Cards.css";
import "../../pages/Item.css";
import React, { useState } from "react";
import Card from "./Card";
import Item from "../../pages/Item";

export default function Cards({ imgOk }) {
  const [selectedId, setSelectedId] = useState("");
  const [cardClicked, setCardClicked] = useState(false);
  const ItemCloseHandler = () => {
    setCardClicked(false);
  };
  

  return (
    <>
      <div className="cards">
        {imgOk &&
          imgOk.map((data) => (
            <Card
              key={data.node.id}
              data={data.node}
              id={data.node.id}
              titleEn={data.node.titleEn}
              title={data.node.title}
              episodes={data.node.episodesCount}
              img={data.node.image.recommendedImageUrl}
              setCardClicked={setCardClicked}
              setSelectedId={setSelectedId}
            />
          ))}
      </div>

      {cardClicked ? (
        <>
          <Item selectedId={selectedId} ItemCloseHandler={ItemCloseHandler} />
          <div className="item-bg" onClick={ItemCloseHandler}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
