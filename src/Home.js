import React, { useEffect, useState } from "react";

// import { gql, useQuery } from "@apollo/client";
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

  useEffect(() => {
    const fetchAnime = async () => {
      const res = await fetch(`http://api.moemoe.tokyo/anime/v1/master/2022`);
      const json = await res.json();
      if (res.ok) {
        setAnimes(json);
      }
    };
    fetchAnime();
  }, []);
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
