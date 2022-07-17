import React, { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  const [animes, setAnimes] = useState(null);
  useEffect(() => {
    const fetchAnime = async () => {
      const res = await fetch("https://api.annict.com/v1/works");
      const json = await res.json();
      if (res.ok) {
        setAnimes(json);
      }
    };
    fetchAnime();
  }, []);

  return (
    <div>
      <Header />

      <div className="main-container">
        <Sidebar />
        <Main />
      </div>

      {animes &&
        animes.map((anime) => <p key={anime.id}>{console.log(anime)}</p>)}
      <Footer />
    </div>
  );
}
