import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main-container">
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
