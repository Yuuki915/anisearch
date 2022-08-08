import React, { useEffect, useState } from "react";

import { gql, useQuery, useMutation } from "@apollo/client";
// import { gql, useQuery } from "@apollo/client";
import Footer from "./components/partials/footer/Footer";
import Header from "./components/partials/header/Header";
import Main from "./components/pages/top/main/Main";
import Sidebar from "./components/pages/top/sidebar/Sidebar";

import {
  GET_ANIME_2022,
  GET_ANIME_2021,
  GET_ANIME_2020,
  GET_ANIME_2019,
  GET_ANIME_2018,
  GET_ANIME_2017,
  GET_ANIME_2016,
} from "./components/GetAnimes";
import AnimeList from "./components/AnimeList";

export default function Home() {
  const [animes, setAnimes] = useState(null);

  // const GET_TODOS = gql`
  //   query getTodos {
  //     todos {
  //       done
  //       id
  //       text
  //     }
  //   }
  // `;

  const ADD_TODO = gql`
    mutation addTodo($text: String!) {
      insert_todos(objects: { text: $text }) {
        returning {
          done
          id
          text
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_ANIME_2022);

  // const [todoText, setTodoText] = useState("");
  // const [addTodo] = useMutation(ADD_TODO);

  // const handleAddTodo = async (e) => {
  //   e.preventDefault();

  //   if (!todoText.trim()) return;
  //   const data = await addTodo({
  //     variables: { text: todoText },
  //     refetchQueries: [{ query: GET_ANIME_2022 }],
  //   });
  // };

  if (loading) return <h2>Loading Todos...</h2>;
  if (error) return <h2>Error fetching todos!</h2>;

  const oyoyo = data.searchWorks.edges;
  const tvAnime = oyoyo && oyoyo.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return (
    <div className="home">
      <Header data={imgOk} />

      <div className="main-container">
        <Sidebar />
        <Main imgOk={imgOk} imgNull={imgNull} />
      </div>

      {/* {imgOk.map((item) => (
        <img
          key={item.id}
          src={`${item.node.image.recommendedImageUrl}`}
          alt={`${item.node.title}`}
          style={{ width: "200px" }}
        />
      ))} */}

      <Footer />
    </div>
  );
}
