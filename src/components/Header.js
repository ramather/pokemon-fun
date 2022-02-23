import React from "react"
import "./Header.css";

export default function Header() {
    return (
        <header className="Header">
            <img className="Logo" src={"./pokemon.png"} />
            <nav className="Nav">
                <a href="/">Home</a>
                <a href="/">Generator</a>
                <a href="/">Pokedex</a>
                <a href="/">Game</a>


            </nav>
        </header>
    )
}