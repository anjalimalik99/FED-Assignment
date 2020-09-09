import React from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import './App.css';
import Register from './components/Register';
import Services from './components/Services'
import {Switch , Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Routers from './components/Routers'
 
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/services" component={Services}></Route>
                <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
