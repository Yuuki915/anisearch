import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { gql, useQuery, useMutation } from "@apollo/client";

import Home from "./Home";

function App() {

  //
  // const GET_TODOS = gql`
  //   query getTodos {
  //     todos {
  //       done
  //       id
  //       text
  //     }
  //   }
  // `;
  // const ADD_TODO = gql`
  //   mutation addTodo($text: String!) {
  //     insert_todos(objects: { text: $text }) {
  //       returning {
  //         done
  //         id
  //         text
  //       }
  //     }
  //   }
  // `;

  // const { data, loading, error } = useQuery(GET_ALL_ANIME);

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

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
