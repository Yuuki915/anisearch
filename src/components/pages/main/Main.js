import "./Main.css";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../../../GetAnimes";

export default function Main({
  dataAll,
  data22,
  data21,
  data20,
  data19,
  data18,
  data17,
  data16,
}) {
  // const { data } = useQuery(GET_ALL_ANIME);
  // const animeObj = data.searchWorks.edges;
  // const tvAnime =
  //   animeObj && animeObj.filter((item) => item.node.media === "TV");
  // const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  // const dataAll = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  // console.log(dataAll);

  const years = [9999, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const [chooseYear, setChooseYear] = useState(2022);
  const seasons = ["All", "Spring", "Summer", "Autumn", "Winter"];
  const [chooseSeason, setChooseSeason] = useState("");
  const [seasonData, setSeasonData] = useState([]);
  const [yearData, setYearData] = useState([]);

  const [className, setClassName] = useState("show-data-disable");
  const [marginToggle, setMarginToggle] = useState(false);
  const [seasonForAll, setSeasonForAll] = useState(false);

  const yearHandler = (year) => {
    setClassName("show-data");

    setChooseYear(year);

    if (year === "All") {
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

    if (chooseYear === 9999) {
      setMarginToggle(true);
      setSeasonForAll(true);
    } else {
      setSeasonForAll(false);
    }
  };

  const seasonHandler = (season) => {
    setChooseSeason(season);

    const findSeason = yearData.filter(
      (item) => item.node.seasonName === chooseSeason.toUpperCase()
    );

    if (chooseSeason === "All") {
      setSeasonData(yearData);
    } else {
      setSeasonData(findSeason);
    }
  };
  console.log(chooseSeason, chooseYear);

  return (
    <div className="main">
      <div className="part-category">
        <div className="bg-blur"></div>
        <div className="year-and-seasons">
          <div className={`years ${marginToggle ? "year-top-margin" : ""}`}>
            {years.map((year) => (
              <p
                key={year.toString()}
                className={`year ${
                  chooseYear === year ? "set-year" : "unset-year"
                }`}
                onClick={() => yearHandler(year)}
              >
                {year === 9999 ? "All" : year}
              </p>
            ))}
          </div>

          <div className={`seasons ${seasonForAll ? "seasons-disable" : ""}`}>
            {seasons.map((season) => (
              <p key={season} onClick={() => seasonHandler(season)}>
                {season}
              </p>
            ))}
          </div>
        </div>
      </div>

      {className === "show-data-disable" ? (
        <div className="cat-choose">
          <div>Choose year and season from above</div>
        </div>
      ) : (
        <div className={`${className}`}>
          <Category
            yearData={yearData}
            year={chooseYear}
            seasonData={seasonData}
            season={chooseSeason}
          />
        </div>
      )}
    </div>
  );
}
