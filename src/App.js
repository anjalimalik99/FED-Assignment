import React from "react";
import "./App.css";
import Payment from "./pages/payment";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Products from "./pages/product";
import ReduxSample from "./pages/sample-page-redux";
import LoginRegister from "./pages/login-register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Products}></Route>
          <Route exact path="/login" component={LoginRegister}></Route>
          <Route exact path="/payment" component={Payment}></Route>
          <Route exact path="/redux" component={ReduxSample}></Route>
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
