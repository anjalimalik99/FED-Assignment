import React, { Component } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import {NavLink} from 'react-router-dom'
import '../styles/Register.scss'

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             company_name:'',
             email:'',
             mobile:'',
             name:'',
             pincode:'',
             gst:''
        }
        this.companyName = this.companyName.bind(this);
        this.emailId = this.emailId.bind(this);
        this.personName = this.personName.bind(this);
        this.pinCode = this.pinCode.bind(this);
        this.GSTNumber = this.GSTNumber.bind(this);
        this.mobileNumber = this.mobileNumber.bind(this);
        // this.companyName = this.companyName.bind(this);
        // this.companyName = this.companyName.bind(this);
    }
    companyName(event)
    {
        this.setState({
            company_name : event.target.newValue
        });
        let el = document.querySelector('#company-name-label');
        el.style.visibility='visible';
    }
    emailId(event)
    {
        this.setState({
            email : event.target.newValue
        });
        let el = document.querySelector('#email-label');
        el.style.visibility='visible';
     }
    mobileNumber(event)
    {
        this.setState({
            mobile: event.target.newValue
        });
        let el = document.querySelector('#mobile-label');
        el.style.visibility='visible';
    }
    personName(event)
    {
        this.setState({
            name : event.target.newValue
        });
        let el = document.querySelector('#contact-name-label');
        el.style.visibility='visible';
    }
    pinCode(event)
    {
        this.setState({
             pincode: event.target.newValue
        });
        let el = document.querySelector('#pincode-label');
        el.style.visibility='visible';
    }
    GSTNumber(event)
    {
        this.setState({
            gst : event.target.newValue
        });
        let el = document.querySelector('#gst-label');
        el.style.visibility='visible';
    }
    
    render() {
        return (
            <div className="main">
            <Header></Header>
            <div className="container">
                <SideBar></SideBar>
                <div className="register">
                    <div className="register-label">Create Account</div>
                    <div className="already-reg">or already registered ?</div>
                    <NavLink to="/login" className="lgn-link">Login Now</NavLink>
                    <div className="form">
                        <label id="company-name-label" className="label">Company Name</label>
                        <input type="text" placeholder="Company Name" className="form-field"
                         onChange={this.companyName}></input>
                        <label id="email-label" className="label">Official Email</label>
                        <input type="email" placeholder="Official Email" className="form-field"
                        onChange={this.emailId}></input>
                        <label id="mobile-label" className="label"> Mobie | Landline</label>
                        <input type="text" placeholder="Mobile | Landline" className="form-field"
                        onChange={this.mobileNumber}></input>
                        <label id="contact-name-label" className="label">Contact Person's Name</label>
                        <input type="text" placeholder="Contact Person's Name" className="form-field"
                        onChange={this.personName}></input>
                        <label>Contact Person's Name</label>
                        <input type="text" placeholder="Contact Person's Name" className="form-field"></input>
                        <label id="pincode-label" className="label">Pin Code</label>
                        <input type="text" placeholder="Pin Code" className="form-field"
                        onChange={this.pinCode}></input>
                        <label id="gst-label" className="label">GST Identification Number</label>
                        <input type="text" placeholder="GST Identification Number" className="form-field"
                        onChange={this.GSTNumber}></input>
                        <div className="check-box">
                        <input type="checkbox" value="promotional communication" ></input>
                        <label className="label1">I agree to receive Promotional Communication from Naukari</label>
                        </div>
                        <div className="check-box1">
                        <input type="checkbox" value="terms and condition" ></input>
                        <label className="label1">I agree to Naukari's
                        <div className="terms">Terms and Conditions </div> 
                        and <div className="terms">Privacy Policy</div></label>
                        </div>
                        <NavLink to="/services" className="rgstr-btn">Register</NavLink>
                    </div>
                    
                </div>
            

            </div>
        </div>

        )
    }
}

export default Register

