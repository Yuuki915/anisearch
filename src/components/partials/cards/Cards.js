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
        {Array.isArray(imgOk) &&
          imgOk.map((data) => (
            <Card
              key={data.id}
              data={data}
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
