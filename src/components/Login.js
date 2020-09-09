import React, { Component } from 'react';
import '../styles/Login.scss'
import SideBar from './SideBar';
import Header from './Header';
import {NavLink} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           username : '',
           password: ''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePswrd = this.handlePswrd.bind(this);

      };
    handleEmail(event)
    {
      this.setState(
        {
         username : event.target.newValue
        }
      )
      let el = document.querySelector('#email-label');
      el.style.visibility='visible';
    }
    handlePswrd(event)
    {
      this.setState(
        {
         password : event.target.newValue
        }
      )
      let el = document.querySelector('#pswrd-label');
      el.style.visibility='visible';
    }
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
      <label id="email-label" className="label">Username/email</label>
      <input className="input-field" type = "email" placeholder ="Registered Email ID"
       onChange={this.handleEmail}></input><br></br>
      <label id="pswrd-label" className="label">Password</label>
      <input className="input-field" type = "password" placeholder = "Password"
      onChange={this.handlePswrd}></input>
   
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
