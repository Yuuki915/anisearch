import "./Main.css";
import React, { useState } from "react";
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

  console.log(dataAll);

  const years = [9999, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const [chooseYear, setChooseYear] = useState(2022);
  const [showData, setShowData] = useState([]);

  const [className, setClassName] = useState("");

  const showSeasonsYear = (year) => {
    setChooseYear(year);

    if (year === "All") {
      setShowData(dataAll);
    } else if (year === 2022) {
      setShowData(data22);
    } else if (year === 2021) {
      setShowData(data21);
    } else if (year === 2020) {
      setShowData(data20);
    } else if (year === 2019) {
      setShowData(data19);
    } else if (year === 2018) {
      setShowData(data18);
    } else if (year === 2017) {
      setShowData(data17);
    } else if (year === 2016) {
      setShowData(data16);
    }
  };
  if (showData === [] || showData === undefined) {
    setClassName("show-data-disable");
  }
  // console.log(showData);

  return (
    <div className="main">
      <div className="part-category">
        category
        <div className="year-and-seasons">
          <div className="years">
            {years.map((year) => (
              <p
                key={year.toString()}
                className={`year ${
                  chooseYear === year ? "set-year" : "unset-year"
                }`}
                onClick={() => showSeasonsYear(year)}
              >
                {year === 9999 ? "All" : year}
              </p>
            ))}
          </div>

          <div>
            <p>Spring</p>
            <p>Summer</p>
            <p>Autumn</p>
            <p>Winter</p>
          </div>
        </div>
      </div>

      <div className={`show-data ${className}`}>
        <Category showData={showData} year={chooseYear} />
      </div>
    </div>
  );
}
