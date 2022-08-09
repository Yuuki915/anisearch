import React from "react";

import { gql, useQuery, useMutation } from "@apollo/client";
// import { gql, useQuery } from "@apollo/client";
import Footer from "./components/partials/footer/Footer";
import Header from "./components/partials/header/Header";
import Main from "./components/pages/top/main/Main";
import Sidebar from "./components/pages/top/sidebar/Sidebar";

import { GET_ALL_ANIME } from "./components/GetAnimes";

export default function Home() {
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
  const { data, loading, error } = useQuery(GET_ALL_ANIME);

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

  const animeObj = data.searchWorks.edges;
  const tvAnime =
    animeObj && animeObj.filter((item) => item.node.media === "TV");
  const imgNull = tvAnime && tvAnime.filter((item) => item.node.image === null);
  const imgOk = tvAnime && tvAnime.filter((item) => item.node.image !== null);

  return (
    <div className="home">
      <Header data={imgOk} />

      <div className="main-container">
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  );
}
