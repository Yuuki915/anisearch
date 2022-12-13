import React from "react";
import Img from "react-cool-img";
import noImage from "../../../image/noimage.jpg";
import { Like } from "../Like";

export default function Card({
  data,
  id,
  titleEn,
  title,
  episodes,
  img,
  isLiked,
  setCardClicked,
  setSelectedId,
  getFavs,
}) {
  const ItemShowHandler = () => {
    setSelectedId(id);
    setCardClicked(true);
  };

  return (
    <div className="card">
      <Like
        data={data}
        id={id}
        titleEn={titleEn}
        title={title}
        episodes={episodes}
        img={img}
        isLiked={isLiked}
        getFavs={getFavs}
      />

      <div className="card-img-text" onClick={ItemShowHandler}>
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
          <div className="title-jp">{title}</div>
        </div>
      </div>
    </div>
  );
}
