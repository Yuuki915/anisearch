import React from "react";
import Img from "react-cool-img";
import noImage from "../../../image/noimage.jpg";
import { Like } from "../Like";

export default function Card({ data, setCardClicked, setSelectedId }) {
  const ItemShowHandler = () => {
    setSelectedId(data.id);
    setCardClicked(true);
  };
  return (
    <div className="card">
      <Like data={data} />

      <div className="card-img-text" onClick={ItemShowHandler}>
        <div className="anime-img">
          <Img
            src={`${data.img}`}
            alt={data.titleEn}
            size={[200, 300]}
            placeholder={noImage}
          />
        </div>
        <div className="anime-texts">
          <p>{data.titleEn}</p>
          <p>{data.episodes} Episodes</p>
        </div>

        <div className="hover-item">
          <div className="title-jp">{data.title}</div>
        </div>
      </div>
    </div>
  );
}
