import "./FavoritePage.css";

import axios from "axios";
import React, { useContext, useEffect } from "react";
import Card from "../partials/cards/Card";
import { FavDataContext } from "../../context/FavDataContext";
import Header from "../partials/header/Header";

export const FavoritePage = () => {
  const { favData, setFavData } = useContext(FavDataContext);

  const getFavs = async () => {
    await axios
      .get("http://localhost:8800/favorite")
      .then((res) => {
        res.data.map((item) => (item.isLiked = true));
        setFavData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFavs();
  }, []);

  return (
    <div className="fav-page">
      <Header />
      <div className="fav-cards">
        {Array.isArray(favData) &&
          favData.map((item, key) => (
            <Card
              key={key}
              id={item.id}
              title={item.title}
              titleEn={item.titleEn}
              img={item.img}
              episodes={item.episodesCount}
              isLiked={item.isLiked}
              getFavs={getFavs}
            />
          ))}
      </div>
    </div>
  );
};
