import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './views/Home';
import AddProduct from './views/AddProduct';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/add/product">
          <AddProduct/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
