import React, { useState } from "react";
import Img from "react-cool-img";
import { BsBookmarkFill } from "react-icons/bs";
import noImage from "../../../image/noimage.jpg";

export default function Card({
  id,
  titleEn,
  titleJp,
  episodes,
  img,
  setCardClicked,
  setSelectedId,
}) {
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
  };

  const ItemShowHandler = () => {
    setSelectedId(id);
    setCardClicked(true);
  };

  return (
    <div className="card" onClick={() => ItemShowHandler()}>
      <div
        className={`${likedClass ? "liked" : ""} like`}
        onClick={likeHandler}
      >
        <BsBookmarkFill />
      </div>
      <div className="anime-img">
        <Img
          src={`${img}`}
          alt={titleEn}
          size={[200, 300]}
          placeholder={noImage}
        />
      </div>

      <div className="anime-texts">
        <p>{titleEn}</p>
        <p>{episodes} Episodes</p>
      </div>

      <div className="hover-item">
        <div className="title-jp">{titleJp}</div>
      </div>
    </div>
  );
}
