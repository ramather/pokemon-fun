import './App.css';
import './pokemon.scss'
import PokemonGenerator from './components/PokemonGenerator';
import Header from './components/Header';
function App() {
  
  return (
    <div className="App">
      <Header />
      <PokemonGenerator/>
    </div>
  );
}

export default App;
