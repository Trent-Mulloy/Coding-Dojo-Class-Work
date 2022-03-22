import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Planets from './Components/Planets';
import People from './Components/People';


//first make a form that works
//when it submits make it go to ${category}/${id}
//have a state for your data
//have routes that go collect the data


function App() {
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    const history = useHistory();

    const onSubmitHandler = (e) =>{
      e.preventDefault();
      console.log(category, id)
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
      <Switch>
        <Route exact path="/Planets/:id">
          <Planets/>
        </Route>
        <Route exact path="/People/:id">
          <People/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
