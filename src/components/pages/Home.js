import "./Main.css";
import React, {  useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import loadingImg from "../../image/loading-img.json";
import errorImg from "../../image/error.json";

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

  return (
    <div className="home">
      <Header />
      <Search
        seasonData={seasonData}
        yearData={yearData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchedList={searchedList}
        setSearchedList={setSearchedList}
      />

      <div className="main-container">
        <div className="main">
          <div className="part-category">
            <div className="bg-blur"></div>
            <div className="year-and-seasons">
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
                    className={`${
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
                  <Cards imgOk={searchedList} />
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
