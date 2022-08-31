import axios from "axios";
import React, { useContext, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { FavDataContext } from "../../context/FavDataContext";

export const Like = ({
  data,
  id,
  titleEn,
  title,
  episodes,
  img,
  isLiked,
  getFavs,
}) => {
  const [likedClass, setLikedClass] = useState(isLiked);
  const { setFavData } = useContext(FavDataContext);

  const likeData = {
    id: id,
    titleEn: titleEn,
    title: title,
    img: img,
    episodes: episodes,
    isLiked: Boolean(),
  };

  const addFavs = async () => {
    await axios
      .post("/favorite", likeData)
      .then((res) => {
        likeData.isLiked = true;
        setLikedClass(true);
        setFavData(likeData);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteFavs = async () => {
    console.log("at delete: ", likeData);
    await axios
      .delete(`/favorite/${likeData.id}`)
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
      <BsBookmarkFill />
    </div>
  );
};
