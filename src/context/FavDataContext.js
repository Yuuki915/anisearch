import React, { useState, createContext } from "react";

export const FavDataContext = createContext();

export const FavDataProvider = ({ children }) => {
  const [favData, setFavData] = useState([]);

  return (
    <FavDataContext.Provider value={{ favData, setFavData }}>
      {children}
    </FavDataContext.Provider>
  );
};
