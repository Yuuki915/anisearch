import React, { useState } from "react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

export default function Card(props) {
  const [card, setCard] = useState({});
  const [likedClass, setLikedClass] = useState(false);

  const [count, setCount] = useState(1);
  const likeHandler = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
      setLikedClass(false);
      setCount(1);
    } else {
      setLikedClass(true);
    }
    console.log(count);
  };

  return (
    <div className="card">
      <div
        className={`${likedClass ? "liked" : ""} like`}
        onClick={likeHandler}
      >
        <BsBookmarkFill />
      </div>
      <div className="anime-img">
        <img src={`${props.img}`} alt={props.titleEn} />
      </div>

      <div className="anime-texts">
        <p>{props.titleEn}</p>
        <p>{props.episodes} Episodes</p>
      </div>

      <div className="hover-item">
        <div className="title-jp">{props.titleJp}</div>
        {/* <div className="like" onClick={likeHandler}>
          {like}
        </div> */}
      </div>
    </div>
  );
}
