import "./Cards.css";
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
              id={data.node.id}
              titleEn={data.node.titleEn}
              titleJp={data.node.title}
              episodes={data.node.episodesCount}
              img={data.node.image.recommendedImageUrl}
              setCardClicked={setCardClicked}
              setSelectedId={setSelectedId}
            />
          ))}
      </div>

      {cardClicked ? (
        <>
          <Item
            setCardClicked={setCardClicked}
            selectedId={selectedId}
            ItemCloseHandler={ItemCloseHandler}
          />
          <div className="item-bg" onClick={ItemCloseHandler}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
