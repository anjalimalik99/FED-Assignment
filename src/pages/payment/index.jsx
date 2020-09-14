import React, { Component } from 'react';
import Header from "../../components/header";
import CreditCard from "../../components/creditCard"
import MaterialIcon from 'material-icons-react';
import { NavLink } from "react-router-dom";
import "./payment.scss"

class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: "Symbiosis Technologies Pvt. Ltd.",
             amountPayable: 0,
             itemsInCart:0,
             items : ["1 Hot Vacancy","1 Classified"],
             method:""
        }
        this.paymentMethod = this.paymentMethod.bind(this);
    }
    paymentMethod(value)
    {
        this.setState({
            method: value
        })
    }
    
    render() {
        let paymentComponent;
        const method = this.state.method;
        if(method === "creditCard")
         paymentComponent = <CreditCard/>
        return (
        <div className="payment">
        <div className="header">
             <Header></Header>
        </div>
        <div className="body">
        <div className ="side-bar-l">
          <div className = "lgn">
          <div className="head-circle">
          <div className="circle-1"></div>
          <div className = "heading-1">Create Account or Login</div>
          </div>
          <div className="first-option">
          <div className="description-1">info@symbiosis.com <NavLink to="/" className="">Change Account</NavLink></div>
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
        <div className="side-bar-r">
        <div className="user">
            <MaterialIcon icon="business"></MaterialIcon>
            <div className="active-user">{this.state.user}</div>
        </div>
            <div className="card-1">
               <div className="line-1">
                <div className="total-amount-label">Total Amount Payable</div>
                <div className="total-amount">Rs. {this.state.amountPayable}</div>
                </div>
                <div className="line-2">
                <div className="items-name">{this.state.items.map((i) => <p>{i} | </p>)}
                </div>
                <p className="tax-label"><u>Incl. all taxes</u></p>
                </div>
                <div className="review-link">Review Order</div>
            </div>
            <label className="method-label">Choose Payment Method</label>
            <div className="card-2">
                <ul style={{listStyle:"none", float:"left", paddingLeft:"0", height:"auto",width:"40%"}}>
                    <li className="list-item" onClick={() => this.paymentMethod("creditCard")}>Credit Card</li>
                    <li className="list-item" onClick={() => this.paymentMethod("debitCard")}>Debit Card</li>
                    <li className="list-item" onClick={() => this.paymentMethod("netBanking")}>Net Banking</li>
                    <li className="list-item" onClick={() => this.paymentMethod("wallet")}>Wallets</li>
                    <li className="list-item" onClick={() => this.paymentMethod("cash")}>Cash Cards</li>
                </ul>
                <div className="payment-component">{paymentComponent}</div>
            </div>
        </div>
        </div>
        </div>
        )
    }
}

export default Payment
