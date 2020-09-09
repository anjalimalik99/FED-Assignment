import React, { Component } from 'react';
import '../styles/Login.css'
import SideBar from './SideBar';
import Header from './Header';
import Register from './Register'
import {BrowserRouter as Router ,NavLink, Route} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           username : '',
           password: ''
        }
      };
  render() {
    return (
      <div className="main-container">
        <Header></Header>

      <div className="container">
        <SideBar></SideBar>
      <div className="login"> 
      <div className="login-label">Login to Naukari</div>
      <div className="new-client">New Client ?</div>
      
      <NavLink to="/register" className = "create-account">Create Account</NavLink>
      
      <div className="form">
      <input className="input-field" type = "email" placeholder ="Registered Email ID"></input><br></br>
      <input className="input-field" type = "password" placeholder = "Password"></input>
   
      <NavLink to="/services" className="lgn-btn">Login</NavLink>
     
      </div>
      <div className="fgt-pswrd">Forgot Password</div>
      <div className="trouble-msg">Trouble logging in ? <div className="contact">Contact us</div></div>
      </div>
      </div>
      </div>
    );
  }
}

export default Login;
