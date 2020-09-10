import React from "react";
import Login from "./pages/login";
import "./App.css";
import Register from "./pages/registration";
import Services from "./pages/services";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

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

// marvelapp: https://marvelapp.com/prototype/4efb724/screens

// - [Buy online with hover text](https://marvelapp.com/prototype/4efb724/screen/65992957)
// - [Cart View](https://marvelapp.com/prototype/4efb724/screen/62078699)
// - [Login](https://marvelapp.com/prototype/4efb724/screen/62078703)
// - [Registration Page](https://marvelapp.com/prototype/4efb724/screen/62078714)
// - [Make Payment - Account Created Successfully](https://marvelapp.com/prototype/4efb724/screen/62078709)
// - [Make Pending Payment](https://marvelapp.com/prototype/4efb724/screen/62078710)
