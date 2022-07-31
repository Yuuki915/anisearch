import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";

export default function Card(props) {
  const [card, setCard] = useState({});
  const [like, setLike] = useState("☆");

  const [count, setCount] = useState(1);
  const likeHandler = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      setLike("☆");
    } else {
      setLike("★");
    }
    console.log(count);
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
          {like}
        </div>
      </div>
    </div>
  );
}
