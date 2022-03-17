import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchInfo = (event) => {
    event.preventDefault();

    console.log("calling API");
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=800")
      .then(res => {
        console.log(res);
        setPokemon(res.data.results);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <form onSubmit={fetchInfo}>
        <button type="submit" onClick={fetchInfo} className="btn btn-primary btn-lg">fetch Pokemon</button>
      </form>
      <ul>
      {
          pokemon.map((poke,i)=>{
            return <li key={i}>{poke.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

