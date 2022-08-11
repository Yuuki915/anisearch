import React from "react";

import { useQuery } from "@apollo/client";
import Footer from "./components/partials/footer/Footer";
import Header from "./components/partials/header/Header";
import Main from "./components/pages/top/main/Main";
import Sidebar from "./components/pages/top/sidebar/Sidebar";
import { GET_ALL_ANIME } from "./components/GetAnimes";
import {
  Data16,
  Data17,
  Data18,
  Data19,
  Data20,
  Data21,
  Data22,
} from "./components/EachYear";

export default function Home() {
  const { data, loading, error } = useQuery(GET_ALL_ANIME);
  const animeData = data && data.searchWorks.edges;
  const animeTv =
    animeData && animeData.filter((item) => item.node.media === "TV");
  const imgNull = animeTv && animeTv.filter((item) => item.node.image === null);
  const dataAll = animeTv && animeTv.filter((item) => item.node.image !== null);

  const data22 = Data22();
  const data21 = Data21();
  const data20 = Data20();
  const data19 = Data19();
  const data18 = Data18();
  const data17 = Data17();
  const data16 = Data16();

  console.log(dataAll);
  
  if (loading)
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="loading">Loading.....</div>
        </div>
      </>
    );
  if (error)
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="error">Sorry! Something went wrong..</div>
        </div>
      </>
    );

  return (
    <div className="home">
      <Header
        dataAll={dataAll}
        data22={data22}
        data21={data21}
        data20={data20}
        data19={data19}
        data18={data18}
        data17={data17}
        data16={data16}
      />

      <div className="main-container">
        <Sidebar />
        <Main
          dataAll={dataAll}
          data22={data22}
          data21={data21}
          data20={data20}
          data19={data19}
          data18={data18}
          data17={data17}
          data16={data16}
        />
      </div>

      <Footer />
    </div>
  );
}
