import React, { useEffect, useState } from "react";

import { gql, useQuery } from "@apollo/client";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

import AnimeList from "./components/AnimeList";

export default function Home() {
  const [animes, setAnimes] = useState(null);

  // gql --->
  //
  // const getAnimeQuery = gql`
  //   {
  //     animes {
  //       name
  //       id
  //     }
  //   }
  // `;
  // function AnimeList() {
  //   const { loading, error, data } = useQuery(getAnimeQuery);
  //   if (loading) return <p>loading...</p>;
  //   if (error) return <p>Something went wrong...</p>;
  //   console.log(data.animes);
  //   return data.animes.map((anime) => <div key={anime.id}>{anime.name}</div>);
  // }
  // <--- gql

  const [limit, setLimit] = useState(10);
  const [cat, setCat] = useState("");
  // useEffect(() => {
  //   const fetchAnime = async () => {
  //     const res = await fetch(
  //       // `https://kitsu.io/api/edge/anime?page[limit]=${limit}&filter[categories]=${cat}`,
  //       {
  //         // headers: {
  //         //   Accept: "application/vnd.api+json",
  //         //   ContentType: "application/vnd.api+json",
  //         // },
  //       }
  //     );
  //     const json = await res.json();
  //     if (res.ok) {
  //       setAnimes(json);
  //     }
  //   };
  //   fetchAnime();
  // }, []);
  // https://kitsu.io/api/edge
  // http://api.moemoe.tokyo/anime/v1/master/2022/2
  // https://api.annict.com/v1/works

  return (
    <div>
      <Header />

      <div className="main-container">
        <Sidebar />
        <Main animeData={animes} />
      </div>
      {/* <AnimeList /> */}
      {/* {animes &&
        animes.map((anime) => <p key={anime.id}>{console.log(anime)}</p>)} */}
      <Footer />
    </div>
  );
}
