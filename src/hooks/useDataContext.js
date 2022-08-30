import { useContext } from "react";
import { DataContext } from "../context/EachDataContext";

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw Error("useDataContext must be used inside an DataContextProvider");
  }

  return context;
};
