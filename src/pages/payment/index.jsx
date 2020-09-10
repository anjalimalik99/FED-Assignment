import React from 'react'
import './payment.scss'
import { NavLink } from 'react-router-dom'
import Header from '../../components/header'
function Payment() {
    return (
        <div className="payment" style={{width: "100%"}}>
        <div className="header">
             <Header></Header>
        </div>
        <div className ="side-bar">
          <div className = "lgn">
          <div className="head-circle">
          <div className="circle-1"></div>
          <div className = "heading-1">Create Account or Login</div>
          </div>
          <div className="first-option">
          <div className="description-1">info@symbiosis.com <NavLink to="/">Change Account</NavLink></div>
          </div>
           </div>
           <div className="pymnt">
           <div className="head-circle">
               <div className="circle-2"></div> 
               <div className = "heading-2">Make Payment</div>
           </div>  
           <div className="second-option">
            <div className="description-2">Review order,select your convinient payment method and make payment</div>
            </div>
            <div className="image"></div>
           </div>
        </div>
        </div>
    )
}

export default Payment
