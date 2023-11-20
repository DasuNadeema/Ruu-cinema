import "./App.css";
import "././Component/Navbar/Navbar.jsx";
import Navbar from "././Component/Navbar/Navbar.jsx";
import Movies from "./Component/Movies/Movies.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;
