import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link ,withRouter} from 'react-router-dom'
import { cartState } from '../../redux/actions/cartActions';
import "./cart.scss";
export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    submitForm = (e) =>
    {
       e.preventDefault();
       this.props.history.push("/payment");
    }
    closeCart = ()=> {
        this.props.cartState(false);
    }
    render() {
        return (
            <div className="cart">
            <div className='close-cart' onClick={this.closeCart}>X</div>
               <h1 className="cart-items">Cart ({this.props.quantity})</h1>
               
               {
                   console.log(this.props.items),
                   this.props.items.map((i) => 
                       <div className="item">
                       <h2 className="item-name">{i.heading}</h2>
                       <div className="price">{i.price}</div>
                       <div className="discount"></div>
                       </div>
                   )
               }
               <div className="cart-total">Cart Total 
               <h1 className="total-price">{this.props.total}</h1>
               </div>
               <button className="btn" onClick={this.submitForm}>Proceed to Pay</button>
                
            </div>
        )
    }
}
const mapStateToDispatch = (dispatch)=>{
   return{
       cartState : (value) =>{dispatch(cartState(value))}
   }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        quantity: state.quantity,
        total: state.total,
    }
}

export default  connect(mapStateToProps,mapStateToDispatch)(withRouter(Cart));
