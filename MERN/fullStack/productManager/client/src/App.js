import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './views/Home';
import AddProduct from './views/AddProduct';
import ViewProduct from './views/ViewProduct';
import EditProduct from './views/EditProduct';

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
        <Route exact path="/view/product/:_id">
          <ViewProduct/>
        </Route>
        <Route exact path="/edit/product/:_id">
          <EditProduct/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
