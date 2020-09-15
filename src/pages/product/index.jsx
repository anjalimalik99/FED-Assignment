import React, { Component } from 'react'
import Header from '../../components/header';
import ProductCard from '../../components/product-card';
import Cart from "../../components/cart";
import data from "../../config.json";
import "./product.scss";
import { connect } from 'react-redux';


export class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
       
    }
    
    render() {
        return (
            <div className='products'>
            <Header></Header>
            <div className="product-body">
              <div className="naukri-job-posting">Naukri Job Posting</div>
              <div className="heading">Quick and easy Job Posting-getQuality Applies</div>
              <div className="available-products">
                   {
                        this.props.items.map((i) => <div className="product-card">
                        <ProductCard index={this.props.items.indexOf(i)} type={i.heading} detail={i.detail} price ={i.price}></ProductCard>
                        </div>)
                   } 
              </div>
              { (this.props.cart) ?
              <div className="cart-container">
               <Cart></Cart></div> : <div></div> 
                }
            </div>
            </div>
        )
    }
}
// const mapDispatchToProps= (dispatch)=>{
    
//     return{
//         addToCart: (id)=>{dispatch(addToCart(id))}
//     }
// }

const mapStateToProps = (state)=>{
    return {
      cart : state.cart,
      items:state.items
    }
  }

export default connect(mapStateToProps)(Products);
