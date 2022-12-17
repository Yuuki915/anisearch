import "./Item.css";
import React from "react";
import { DataAll } from "../EachYear";
import { IoMdClose } from "react-icons/io";

export default function Item({ selectedId, ItemCloseHandler }) {
  const dataAll = DataAll();
  const findItem =
    dataAll && dataAll.filter((data) => data.node.id === selectedId);
  const item = findItem[0].node;

  return (
    <div className="item">
      <IoMdClose className="item-close-btn" onClick={ItemCloseHandler} />
      <div className="item-titles">
        <h2>{item.title}</h2>
        <h4>{item.titleEn}</h4>
      </div>

      <div className="item-img">
        <img src={item.image.recommendedImageUrl} alt="" />
      </div>
      <div>
        <p>{`${item.episodesCount} episodes`}</p>
        <p>{`Release: ${item.seasonName}, ${item.seasonYear}`}</p>
        <p>Satisfaction Rate: {item.satisfactionRate}</p>
      </div>
    </div>
  );
}
