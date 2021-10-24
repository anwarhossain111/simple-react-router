import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Friend from './components/Friend/Friend';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/friends">
          <Friends></Friends>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
