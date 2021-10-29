import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo/pages';
import { NavLink, Route, Switch } from 'react-router-dom';
import AlbumFeature from './features/Album/pages';
import { useEffect } from 'react';
import productApi from './api/productApi';
function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
    }
    fetchProducts();
  }, []);



  return (
    <div className="App">
      <p><NavLink to='/todos'> Todos</NavLink> </p>
      <p><NavLink to='/albums'> Albums</NavLink> </p>
      <Switch>
        {/* <Route path="/" component={HomePage} exact></Route> */}
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path='/albums' component={AlbumFeature}></Route>
      </Switch>


    </div>
  );
}

export default App;
