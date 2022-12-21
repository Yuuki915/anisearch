import "./Main.css";
import React, { useContext, useEffect, useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import loadingImg from "../../image/loading-img.json";
import errorImg from "../../image/error.json";
import { FiHeart } from "react-icons/fi";
import { useQuery } from "@apollo/client";
import Footer from "../partials/footer/Footer";
import Header from "../partials/header/Header";
import { GET_ALL_ANIME } from "../GetAnimes";
import {
  Data16,
  Data17,
  Data18,
  Data19,
  Data20,
  Data21,
  Data22,
  DataAll,
} from "../EachYear";
import Category from "./Category";
import { Search } from "../partials/Search";
import Cards from "../partials/cards/Cards";
import axios from "axios";
import { FavDataContext } from "../../context/FavDataContext";

export default function Home() {
  const { loading, error } = useQuery(GET_ALL_ANIME);
  const dataAll = DataAll();
  const data22 = Data22();
  const data21 = Data21();
  const data20 = Data20();
  const data19 = Data19();
  const data18 = Data18();
  const data17 = Data17();
  const data16 = Data16();

  const years = [9999, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const [choseYear, setChoseYear] = useState("");
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  const [choseSeason, setChoseSeason] = useState("");
  const [seasonData, setSeasonData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [className, setClassName] = useState("show-data-disable");
  const [marginToggle, setMarginToggle] = useState(false);
  const [seasonForAll, setSeasonForAll] = useState(false);

  const [searchedList, setSearchedList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [hint, setHint] = useState(false);
  const ItemCloseHandler = () => {
    setHint(false);
  };
  const ShowHint = () => {
    setHint(!hint);
  };

  const { favData, setFavData } = useContext(FavDataContext);
  const getFavs = async () => {
    await axios
      // .get("http://localhost:8800")
      .get("https://anisearch-api.onrender.com")
      .then((res) => {
        res.data.map((item) => (item.isLiked = true));
        setFavData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFavs();
  }, []);

  const [choseFav, setChoseFav] = useState(false);
  const [showFavData, setShowFavData] = useState({});
  const ShowFav = () => {
    setClassName("show-data");
    setShowFavData(favData);
    setChoseFav(true);
    setChoseYear("");
    setSeasonData([]);
  };

  const yearHandler = (year) => {
    setClassName("show-data");

    setChoseYear(() => {
      if (year === 9999) {
        setMarginToggle(true);
        setSeasonForAll(true);
      } else {
        setSeasonForAll(false);
      }

      if (year === 9999) {
        setYearData(dataAll);
      } else if (year === 2022) {
        setYearData(data22);
      } else if (year === 2021) {
        setYearData(data21);
      } else if (year === 2020) {
        setYearData(data20);
      } else if (year === 2019) {
        setYearData(data19);
      } else if (year === 2018) {
        setYearData(data18);
      } else if (year === 2017) {
        setYearData(data17);
      } else if (year === 2016) {
        setYearData(data16);
      }
      setSeasonData([]);
      setChoseFav(false);

      return year;
    });

    setChoseSeason("");
  };

  const seasonHandler = (season) => {
    setChoseSeason(() => {
      // season
      const findSeason = yearData.filter(
        (item) => item.node.seasonName === season.toUpperCase()
      );

      if (choseYear === 9999) {
        setSeasonData(yearData);
      } else {
        setSeasonData(findSeason);
      }

      return season;
    });
  };

  if (loading)
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="loading">
            <Player
              src={loadingImg}
              style={{ height: "100px", width: "100px" }}
              autoplay={true}
              loop
              speed={1}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  if (error)
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="error">
            <Player
              src={errorImg}
              style={{ height: "100px", width: "200px" }}
              autoplay={true}
              loop
              speed={0.8}
            />
            Something went wrong.
          </div>
        </div>
        <Footer />
      </>
    );
  const passCardData = searchedList.map((item) => {
    const id = item.node.id;
    const titleEn = item.node.titleEn;
    const title = item.node.title;
    const episodes = item.node.episodesCount;
    const img = item.node.image.recommendedImageUrl;
    return { id, titleEn, title, episodes, img };
  });

  return (
    <div className="home">
      <Header
        hint={hint}
        ShowHint={ShowHint}
        ItemCloseHandler={ItemCloseHandler}
      />
      <Search
        seasonData={seasonData}
        yearData={yearData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchedList={searchedList}
        setSearchedList={setSearchedList}
      />

      <div
        className={`${hint ? "hint-bg" : "no-bg"}`}
        onClick={ItemCloseHandler}
      ></div>
      <div className={`${hint ? "hint-list" : "hint-lost-off"}`}>
        <h2>Site guide</h2>

        <div className="explain">
          <p>
            This is a website "Anime search" where are all animes broadcasted in
            2016 - 2022.
          </p>
          <h4>
            <span>●</span>Search
          </h4>
          <p>
            You can search in Japanese and alphabets. Click the letters right
            next the search field. Will make letter's color changed and search
            in the color's language.
          </p>
          <p>
            Search field will help you to search from year / season whichever
            you chose.
          </p>

          <h4>
            <span>●</span>Favorite list
          </h4>
          <p>This is your favorite box! Add everything you love!</p>

          <h4>
            <span>●</span>Years and Seasons
          </h4>
          <p>
            You can find Animes from year and then season. Enjoy looking Animes
            up!
          </p>
        </div>
      </div>
      <div className="main-container">
        <div className="main">
          <div className="part-category">
            <div className="bg-blur"></div>
            <div className="year-and-seasons">
              <div
                className={`${
                  choseFav ? "set-fav-text-color" : "unset-fav-text-color"
                }`}
                onClick={ShowFav}
              >
                <p className="fav-text">Favorite List</p>
                <FiHeart className={`${choseFav ? "set-fav" : "unset-fav"}`} />
              </div>
              <div className={`years ${marginToggle ? "year-top-margin" : ""}`}>
                {years.map((year) => (
                  <p
                    key={year}
                    className={`year ${
                      choseYear === year ? "set-year" : "unset-year"
                    }`}
                    onClick={() => yearHandler(year)}
                  >
                    {year === 9999 ? "All" : year}
                  </p>
                ))}
              </div>

              <div
                className={`seasons ${
                  seasonForAll || choseYear === "" ? "seasons-disable" : ""
                }`}
              >
                {seasons.map((season) => (
                  <p
                    key={season}
                    className={`season ${
                      choseSeason === season ? "set-season" : "unset-season"
                    } `}
                    onClick={() => seasonHandler(season)}
                  >
                    {season}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {searchedList.length === 0 ? (
            className === "show-data-disable" ? (
              <div className="cat-choose">
                <div>Choose year and season from above</div>
              </div>
            ) : (
              <div className={`${className}`}>
                <Category
                  yearData={yearData}
                  year={choseYear}
                  favData={showFavData}
                  choseFav={choseFav}
                  seasonData={seasonData}
                  season={choseSeason}
                />
              </div>
            )
          ) : (
            <div className={`${className}`}>
              <div className="category">
                <div className="header-more">
                  <h2>
                    {choseYear === 9999
                      ? "All TV Anime"
                      : `TV Anime ${choseSeason} in ${choseYear}`}
                  </h2>

                  <p>{searchedList.length} Hit!</p>
                </div>

                <div className="cards-container">
                  <Cards imgOk={passCardData} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
