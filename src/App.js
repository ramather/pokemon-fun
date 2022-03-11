import "./App.css";
import "./pokemon.scss";
import Game from "./components/GameComponents/Game";
import PokemonGenerator from "./components/PokemonGenerator";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<GeneratorPage />} />

        <Route path="/generator" element={<GeneratorPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

function GamePage() {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

function GeneratorPage() {
  return (
    <div className="App">
      <Header />
      <PokemonGenerator />
    </div>
  );
}

export default App;
