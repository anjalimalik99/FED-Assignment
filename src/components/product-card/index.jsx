import React, { Component } from 'react'
import { Button } from "semantic-ui-react";
import "./productCard.scss";
import { connect } from 'react-redux';
import { addToCart , cartState } from '../../redux/actions/cartActions';
import {withRouter} from 'react-router-dom'

 class ProductCard extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            benefits :[
                "Detailed Job Description",
                "Boost on Job Search Page",
                "Job Branding"
            ],
            
            tag:["Flat 10% off | Add 5 Job Postings or more", "10% discount Applied"],
            total:0,
            quantity:0
         }
      
     }
     calculate = () =>
     {
         let el = document.querySelector(`#id_${this.props.index}`)
         let totalItems =  el.value;
         var totalAmount = el.value*this.props.price;
         if(totalItems >= 5)
         { 
             totalAmount = totalAmount - 0.1* totalAmount;
             let el = document.querySelector(`#tag_${this.props.index}`);
             el.innerHTML = this.state.tag[1];
             el.style.color = "#258A51";
         }
         else{
             let el1 = document.querySelector(`#tag_${this.props.index}`);
             el1.innerHTML = this.state.tag[0];
             el1.style.color = " #414B5D";
         }
 
         this.setState({
             total : totalAmount
         })
     }

     addToCart = () =>
     {
         if(this.props.isLoggedIn)
         {
         let el = document.querySelector(`#id_${this.props.index}`);
         let q = parseInt(el.value);
         this.props.addToCart(this.props.index + 1,q, this.state.total);
        }
        else{
            this.props.history.push("/login");
        }
         
     }
     buyNow = () =>
     {
        
        if(this.props.isLoggedIn)
        {
        let el = document.querySelector(`#id_${this.props.index}`);
        let q = parseInt(el.value);
        this.props.addToCart(this.props.index + 1,q, this.state.total);
         this.props.cartState(true);
        }
         else
         this.props.history.push("/login");     }
     
    render() {
        return (
            <div>
                 <div className="card">
                  <div className="type">{this.props.type}</div>
                  <div className="detail">{this.props.detail}</div>
                  <div className="price">Rs. {this.props.price}</div>
                  <div className="location">For all cities</div>
                  <ul>
                      {
                          this.state.benefits.map((i) => <li className="list-item"><div className="list-image"></div>{i}</li>)
                      }
                  </ul>
                  
                  <div className="net-amount">
                  <div className="quantity">Quantity
                  <input type="number" min= "0" placeholder="00" required className="number-of-items" id = {`id_${this.props.index}`} onChange={this.calculate}></input></div>
                  <div className="total">Total &nbsp; &nbsp; {this.state.total}</div>
                  </div>
                  <div id={`tag_${this.props.index}`} className="tag">{this.state.tag[0]}</div>
                  <Button className="addToCart" onClick={this.addToCart}>Add to cart</Button>
                  <Button className ="buyNow" onClick={this.buyNow}>Buy Now</Button>
              </div>
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id,q,total)=>{dispatch(addToCart(id,q,total))},
        cartState: (value) => {dispatch(cartState(value))}
    }
}

const mapStateToProps = (state)=>{
    return {
      isLoggedIn: state.isLoggedIn,
      cart : state.cart
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductCard));
