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
import Category from "./pages/top/main/Category";

export const Data22 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2022);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return <Category imgOk={imgOk} />;
};

export const Data21 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2021);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return <Category imgOk={imgOk} />;
};

export const Data20 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2020);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return <Category imgOk={imgOk} />;
};

export const Data19 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2019);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return <Category imgOk={imgOk} />;
};

export const Data18 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2018);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return <Category imgOk={imgOk} />;
};

export const Data17 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2017);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return <Category imgOk={imgOk} />;
};

export const Data16 = () => {
  const { data, loading, error } = useQuery(GET_ANIME_2016);

  if (loading) return;
  if (error) return;

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return <Category imgOk={imgOk} />;
};
