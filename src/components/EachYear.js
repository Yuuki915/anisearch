import { useQuery } from "@apollo/client";
import React from "react";
import {
  GET_ALL_ANIME,
  GET_ANIME_2016,
  GET_ANIME_2017,
  GET_ANIME_2018,
  GET_ANIME_2019,
  GET_ANIME_2020,
  GET_ANIME_2021,
  GET_ANIME_2022,
} from "./GetAnimes";

export const Data22 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2022);

  if (loading)
    return (
      <div className="main-container">
        <div className="loading"></div>
      </div>
    );
  if (error)
    return (
      <div className="main-container">
        <div className="errpr"></div>
      </div>
    );

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const data22 = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return data22;
};

export const Data21 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2021);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const data21 = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return data21;
};

export const Data20 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2020);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const data20 = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return data20;
};

export const Data19 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2019);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const data19 = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return data19;
};

export const Data18 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2018);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const data18 = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return data18;
};

export const Data17 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2017);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const data17 = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return data17;
};

export const Data16 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2016);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const data16 = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return data16;
};
