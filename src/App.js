import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavDataProvider } from "./context/FavDataContext";

import Home from "./components/pages/Home";
import { FavoritePage } from "./components/pages/FavoritePage";

function App() {
  return (
    <FavDataProvider>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorite" element={<FavoritePage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </FavDataProvider>
  );
}

export default App;
