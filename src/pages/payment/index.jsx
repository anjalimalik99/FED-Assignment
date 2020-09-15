import React, { Component } from 'react';
import Header from "../../components/header";
import CreditCard from "../../components/creditCard"
import MaterialIcon from 'material-icons-react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import "./payment.scss"

class Payment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: "Symbiosis Technologies Pvt. Ltd.",
             amountPayable: 0,
             itemsInCart:0,
             items : ["1 Hot Vacancy","1 Classified"],
             method:-1,
             availableMethods:["Credit Card","Debit Card","Net Banking","Wallets" ,"Cash Cards"]
        }
        this.paymentMethod = this.paymentMethod.bind(this);
    }
    paymentMethod(event){
        console.log(event.target.id)
        this.setState({
            method: event.target.id + 1
        },()=>console.log(this.state.method))
    }
    
    render() {
        let paymentComponent;
        const method = this.state.method;
        if(method == 1)
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
          <div className="description-1">{this.props.userId} <NavLink to="/login" className="">Change Account</NavLink></div>
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
            <div className="active-user">{this.props.username}</div>
        </div>
            <div className="card-1">
               <div className="line-1">
                <div className="total-amount-label">Total Amount Payable</div>
                <div className="total-amount">Rs. {this.props.total}</div>
                </div>
                <div className="line-2">
                <div className="items-name">{this.props.addedItems.map((i) => <p>{i.quantity} {i.heading} |&nbsp;</p>)}
                </div>
                <p className="tax-label"><u>Incl. all taxes</u></p>
                </div>
                <div className="review-link">Review Order</div>
            </div>
            <label className="method-label">Choose Payment Method</label>
            <div className="card-2">
                <ul style={{listStyle:"none", float:"left", paddingLeft:"0", height:"auto",width:"40%"}}>
                   {this.state.availableMethods.map((i)=>
                    <li className="list-item" id={this.state.availableMethods.indexOf(i)} onClick={(event) => this.paymentMethod(event)}>{i}</li>)} 
                </ul>
                <div className="payment-component">{paymentComponent}</div>
            </div>
        </div>
        </div>
        </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      total:state.total,
      addedItems : state.addedItems,
      username : state.username,
      userId :state.userId
    }
}

export default connect(mapStateToProps)(Payment);
