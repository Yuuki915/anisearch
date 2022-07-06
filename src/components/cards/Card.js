import React, { useState } from "react";

export default function Card(props) {
  const [card, setCard] = useState({});

  const likeHandler = () => {
    console.log("hi");
  };
  return (
    <div className="card">
      <div className="details">
        <div className="card-title">
          <p>{props.title}</p>
          <p>{props.seasons} Seasons</p>
          <p>{props.episode} Episodes</p>
        </div>
        <div className="like" onClick={likeHandler}>
          ☆
        </div>
      </div>
    </div>
  );
}
