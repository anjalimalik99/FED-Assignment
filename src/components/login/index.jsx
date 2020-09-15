import React, { Component } from 'react';
import './login.scss';
import { connect } from 'react-redux'
import {loggedIn,changeComponent} from "../actions/cartActions"
import { withRouter} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           username : '',
           password: ''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePswrd = this.handlePswrd.bind(this);
        this.submitForm = this.submitForm.bind(this);

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
    submitForm(e)
    {
      e.preventDefault();
      this.props.loggedIn(true);
      this.props.history.push("/");
    }
    handleClick = () =>{
      this.props.changeComponent("register")
}
  render() {
    return (
  
      <div className="lgn"> 
       <div className="login-label">Login to Naukari</div>
            <div className="new-client">New Client ?

            <div className="create-account" onClick={this.handleClick}>
              Create Account
            </div> </div>
      <form className="form" onSubmit={this.submitForm}>
      <label id="email-label" className="label">Username/email</label>
      <input className="input-field" type = "email" placeholder ="Registered Email ID" required
       onChange={this.handleEmail}></input><br></br>
      <label id="pswrd-label" className="label" required>Password</label>
      <input className="input-field" type = "password" placeholder = "Password"
      onChange={this.handlePswrd}></input>
   
      <button type="submit" className="lgn-btn">Login</button>
      </form>
      <div className="fgt-pswrd">Forgot Password</div>
      <div className="trouble-msg">Trouble logging in ? <div className="contact">Contact us</div></div>
      </div>
    );
  }
}
const mapStateToDispatch = (dispatch) =>{
  return{
    loggedIn : (value) => {dispatch(loggedIn(value))},
    changeComponent :(value) => {dispatch(changeComponent(value))}

  }
}

export default connect(null,mapStateToDispatch)(withRouter(Login));
