import React from "react";
import Cards from "../partials/cards/Cards";

export default function Category({
  yearData,
  year,
  seasonData,
  season,
  favData,
  choseFav,
}) {
  const yearOrgData = yearData.map((d) => {
    const id = d.node.id;
    const titleEn = d.node.titleEn;
    const title = d.node.title;
    const episodes = d.node.episodesCount;
    const img = d.node.image.recommendedImageUrl;
    return { id, titleEn, title, episodes, img };
  });
  const seaOrgData = seasonData.map((d) => {
    const id = d.node.id;
    const titleEn = d.node.titleEn;
    const title = d.node.title;
    const episodes = d.node.episodesCount;
    const img = d.node.image.recommendedImageUrl;
    return { id, titleEn, title, episodes, img };
  });
  return (
    <div className="category">
      <div className="header-more">
        {choseFav ? (
          <h2>Favorite List</h2>
        ) : (
          <h2>
            {year === 9999 ? "All TV Anime" : `TV Anime ${season} in ${year}`}
          </h2>
        )}
        {choseFav ? (
          <></>
        ) : seasonData.length === 0 ? (
          <p>{yearData.length} Hit!</p>
        ) : (
          <p>{seasonData.length} Hit!</p>
        )}
      </div>

      <div className="cards-container">
        {choseFav ? (
          <Cards imgOk={favData} />
        ) : seasonData.length === 0 ? (
          <Cards imgOk={yearOrgData} />
        ) : (
          <Cards imgOk={seaOrgData} />
        )}
      </div>
    </div>
  );
}
