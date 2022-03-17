import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


//first make a form that works
//when it submits make it go to ${category}/${id}
//have a state for your data from the axios call
//have an axios call to url//swapi/${category}/${id}
//have routes that go collect the data


function App() {
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    const history = useHistory();

    const onSubmitHandler = (e) =>{
      e.preventDefault();
      history.push(`/${category}/${id}`)
      setCategory("");
      setId("");
  }

  return (
    <div className="App">
      <h1>Hello there</h1>
      <h2>Ahh General Kenobi...</h2>
      <form onSubmit={onSubmitHandler}>
        <input value={category} type="text" onChange={ (e) => setCategory(e.target.value) } />
        <input value={id} type="text" onChange={ (e) => setId(e.target.value) } />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
