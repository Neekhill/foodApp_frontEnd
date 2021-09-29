/* import Navigation from "./components/Navigation";
import ProductCard from "./components/ProductCard";
import SkeletonCard from "./components/SkeletonCard"; */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Orders from './pages/Orders';
import Menu from './components/Menu';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/explore" component={RestaurantList} />

          <Route path="/menu/:id" component={Menu} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;

