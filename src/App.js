import "./App.css";
import { FavDataProvider } from "./context/FavDataContext";

import Home from "./components/pages/Home";

function App() {
  return (
    <FavDataProvider>
      <div className="App">
        <Home />
      </div>
    </FavDataProvider>
  );
}

export default App;
