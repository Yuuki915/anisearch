import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Item from "./components/pages/Item";

function App() {
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
