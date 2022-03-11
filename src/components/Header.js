import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <img className="Logo" src={"./pokemon.png"} />
      <nav className="Nav">
        <a href="generator">Generator</a>
        <a href="game">Game</a>
      </nav>
    </header>
  );
}
