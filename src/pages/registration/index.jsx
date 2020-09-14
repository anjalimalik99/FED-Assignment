import React, { Component } from "react";
import Header from "../../components/header/index";
import SideBar from "../../components/side-bar/index";
import { NavLink } from "react-router-dom";
import "./registration.scss";
import MaterialIcon from 'material-icons-react';

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company_name: "",
      email: "",
      mobile: "",
      name: "",
      pincode: "",
      gst: "",
      radio_btn: 1
    };

    this.companyName = this.companyName.bind(this);
    this.emailId = this.emailId.bind(this);
    this.personName = this.personName.bind(this);
    this.pinCode = this.pinCode.bind(this);
    this.GSTNumber = this.GSTNumber.bind(this);
    this.mobileNumber = this.mobileNumber.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
    // this.companyName = this.companyName.bind(this);
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach((item) => (item.selected = false));
    temp[id].selected = true;
    this.setState({
      [key]: temp,
    });
  };

  companyName(event) {
    this.setState({
      company_name: event.target.newValue,
    });
    let el = document.querySelector("#company-name-label");
    el.style.visibility = "visible";
    el.style.paddingTop = "20pt";
  }
  emailId(event) {
    this.setState({
      email: event.target.newValue,
    });
    let el = document.querySelector("#email-label");
    el.style.visibility = "visible";
    el.style.paddingTop = "20pt";

  }
  mobileNumber(event) {
    this.setState({
      mobile: event.target.newValue,
    });
    let el = document.querySelector("#mobile-label");
    el.style.visibility = "visible";
    el.style.paddingTop = "20pt";
    let tel = document.querySelector(".tel");
    tel.style.marginTop = "35pt";

  }
  personName(event) {
    this.setState({
      name: event.target.newValue,
    });
    let el = document.querySelector("#contact-name-label");
    el.style.visibility = "visible";
    el.style.paddingTop = "20pt";

  }
  pinCode(event) {
    this.setState({
      pincode: event.target.value,
    });
    let el = document.querySelector("#pincode-label");
    el.style.visibility = "visible";
    el.style.paddingTop = "20pt";
    console.log(this.state.pincode);

  }
  GSTNumber(event) {
    this.setState({
      gst: event.target.newValue,
    });
    let el = document.querySelector("#gst-label");
    el.style.visibility = "visible";
    el.style.paddingTop = "20pt";
  }
  radioHandler(i)
  {
    this.setState({
         radio_btn : i
     },
     ()=> {
        let el = document.querySelector("#company");
        let el1 = document.querySelector("#firm");
        if(this.state.radio_btn === 1)
        {
            el1.className = "company"
            el.className = "company" + " active"
        }
        else if(this.state.radio_btn === 2)
        {
            el.className = "company"
            el1.className = "company" + " active"
        }
     });
     
   }
   
  render() {
    return (
      <div className="registration">
        <Header></Header>
        <div className="container">
          <SideBar></SideBar>
          <div className="register">
            <div className="register-label">Create Account</div>
            <div className="already-reg">or already registered ?</div>
            <NavLink to="/login" className="lgn-link">
              Login Now
            </NavLink>
            <div className="form">
              <label id="company-name-label" className="label">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="form-field"
                required
                onChange={this.companyName}
              ></input>
              <label id="email-label" className="label">
                Official Email
              </label>
              <input
                type="email"
                placeholder="Official Email"
                className="form-field"
                required
                onChange={this.emailId}
              ></input>
              
              <label id="mobile-label" className="label">
                Mobile/Landline
              </label>
              <div className="tel">
              <select name="code" id="code" className="drop-down" required>
                <option value="+91">+91</option>
                <option value="+1 684">+1 684</option>
                <option value="+213">+213</option>
                <option value="+93">+93</option>
              </select>
              <input
                type="tel"
                placeholder=" Mobile/Landline"
                className="tel-field"
                required
                onChange={this.mobileNumber}
              ></input>
              </div>
              <label id="contact-name-label" className="label">
                Contact Person's Name
              </label>
              <input
                type="text"
                placeholder="Contact Person's Name"
                className="form-field"
                required
                onChange={this.personName}
              ></input>
              <label className="label">Business Type</label>
              <div className="business-type">
              <div id="company" className="company"  onClick={() => this.radioHandler(1)}><MaterialIcon icon="business"/> Company</div>
              <div id="firm" className="company"  onClick={() => this.radioHandler(2)}><MaterialIcon icon="people"/> Cosultancy Firm</div>
              </div>
              <label id="pincode-label" className="label">
                Pin Code
              </label>
              <input
                type="text"
                placeholder="Pin Code"
                className="form-field"
                onChange={this.pinCode}
              ></input>
              <label id="gst-label" className="label">
                GST Identification Number
              </label>
              <input
                type="text"
                placeholder="GST Identification Number"
                className="form-field"
                onChange={this.GSTNumber}
              ></input>
              <div className="check-box">
                <input
                  type="checkbox"
                  value="promotional communication"
                ></input>
                <label className="label1">
                  I agree to receive Promotional Communication from Naukri
                </label>
              </div>
              <div className="check-box1">
                <input type="checkbox" value="terms and condition"></input>
                <label className="label1">
                  I agree to Naukri's
                  <div className="terms">Terms and Conditions </div>
                  and <div className="terms">Privacy Policy</div>
                </label>
              </div>
              <NavLink to="/services" className="rgstr-btn">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
