import axios from "axios";
import React, { useContext, useState } from "react";
import { HiHeart } from "react-icons/hi";

import { FavDataContext } from "../../context/FavDataContext";

export const Like = ({ data }) => {
  const [likedClass, setLikedClass] = useState(
    data.isLiked === undefined ? false : data.isLiked
  );
  const { favData, setFavData } = useContext(FavDataContext);

  const likeData = {
    id: data.id,
    titleEn: data.titleEn,
    title: data.title,
    img: data.img,
    episodes: data.episodes,
    isLiked: data.isLiked,
  };
  const addFavs = async () => {
    await axios
      .post("/", likeData)
      .then((res) => {
        likeData.isLiked = true;
        setLikedClass(true);
        setFavData([...favData, likeData]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteFavs = async () => {
    console.log("at delete: ", likeData);
    await axios
      .delete(`/${likeData.id}`)
      .then((res) => {
        likeData.isLiked = false;
        setLikedClass(false);
        // setFavData((prev) =>
        //   Object.values(prev).filter((data) => data.id !== likeData.id)
        // );

        // setFavData((prev) => console.log(typeof prev));
        setFavData(
          (prev) =>
            Array.isArray(prev) &&
            prev.filter((data) => data.id !== likeData.id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likeHandler = () => {
    if (!likedClass) {
      addFavs();
    } else {
      deleteFavs();
    }
  };

  return (
    <div className={`like ${likedClass ? "liked" : ""}`} onClick={likeHandler}>
      <HiHeart />
    </div>
  );
};
