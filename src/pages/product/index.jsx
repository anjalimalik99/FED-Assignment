import React, { Component } from 'react'
import Header from '../../components/header';
import { Button } from "semantic-ui-react";
import "./product.scss";

export class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             benefits :[
                 "Detailed Job Description",
                 "Boost on Job Search Page",
                 "Job Branding"
             ],
             
             tag:["Flat 10% off | Add 5 Job Postings or more", "10% discount Applied"],
             total1:0,
             total2:0,
             total3:0,
             quantity1:0,
             quantity2:0,
             quantity3:0,
             isLoggedIn : false
        }
        this.calculate1 = this.calculate1.bind(this);
        this.calculate2 = this.calculate2.bind(this);
        this.calculate3 = this.calculate3.bind(this);
        this.orderSummary1 = this.orderSummary1.bind(this);
        this.orderSummary2 = this.orderSummary2.bind(this);
        this.orderSummary3 = this.orderSummary3.bind(this);

    }
    calculate1()
    {
        let el = document.querySelector(".number-of-items-1")
        let totalItems =  el.value;
        var totalAmount = el.value*1680;
        if(totalItems >= 5)
        { 
            totalAmount = totalAmount - 0.1* totalAmount;
            let el1 = document.querySelector(".tag-1");
            el1.innerHTML = this.state.tag[1];
            el1.style.color = "#258A51";
        }
        else{
            let el1 = document.querySelector(".tag-1");
            el1.innerHTML = this.state.tag[0];
            el1.style.color = " #414B5D";
        }

        this.setState({
            total1 : totalAmount
        })
    }
    calculate2()
    {
        let el = document.querySelector(".number-of-items-2")
        let totalItems =  el.value;
        var totalAmount = el.value*800;
        if(totalItems >= 5)
        { 
            totalAmount = totalAmount - 0.1* totalAmount;
            let el1 = document.querySelector(".tag-2");
            el1.innerHTML = this.state.tag[1];
            el1.style.color = "#258A51";
        }
        else{
            let el1 = document.querySelector(".tag-2");
            el1.innerHTML = this.state.tag[0];
            el1.style.color = " #414B5D";
        }

        this.setState({
            total2 : totalAmount
        })
    }
    calculate3()
    {
        let el = document.querySelector(".number-of-items-3")
        let totalItems =  el.value;
        var totalAmount = el.value*250;
        if(totalItems >= 5)
        { 
            totalAmount = totalAmount - 0.1* totalAmount;
            let el1 = document.querySelector(".tag-3");
            el1.innerHTML = this.state.tag[1];
            el1.style.color = "#258A51";
        }
        else{
            let el1 = document.querySelector(".tag-3");
            el1.innerHTML = this.state.tag[0];
            el1.style.color = " #414B5D";
        }

        this.setState({
            total3 : totalAmount
        })
    }
    orderSummary1()
    {
        let el = document.querySelector(".number-of-items-1");
        this.setState({
            quantity1: el.value
        }, ()=>{console.log(`quantity: ${this.state.quantity1} Total: ${this.state.total1}`)})
        
    }
    orderSummary2()
    {
        let el = document.querySelector(".number-of-items-2");
        this.setState({
            quantity2 : el.value
        }, ()=>{
            console.log(`quantity: ${this.state.quantity2} Total: ${this.state.total2}`)})
        


    }
    orderSummary3()
    {
        let el = document.querySelector(".number-of-items-3");
        this.setState({
            quantity3: el.value
        }, ()=>{
            console.log(`quantity: ${this.state.quantity3} Total: ${this.state.total3}`)
        })
        
    }
    
    render() {
        return (
            <div className='products'>
            <Header></Header>
            <div className="product-body">
              <div className="naukri-job-posting">Naukri Job Posting</div>
              <div className="heading">Quick and easy Job Posting-getQuality Applies</div>
              <div className="job-postings">
              <div className="card-1">
                  <div className="type">Hot vacancy</div>
                  <div className="detail">Advanced Job Posting</div>
                  <div className="price">Rs. 1650</div>
                  <div className="location">For all cities</div>
                  <ul>
                      {
                          this.state.benefits.map((i) => <li className="list-item"><div className="list-image"></div>{i}</li>)
                      }
                  </ul>
                  
                  <div className="net-amount">
                  <div className="quantity">Quantity
                  <input type="number" placeholder="00" required className="number-of-items-1" onChange={this.calculate1}></input></div>
                  <div className="total-1">Total &nbsp; &nbsp; {this.state.total1}</div>
                  </div>
                  <div className="tag-1">{this.state.tag[0]}</div>
                  <Button className="addToCart" onClick={this.orderSummary1}>Add to cart</Button>
                  <Button className ="buyNow" onClick={this.orderSummary1}>Buy Now</Button>

              </div>
              <div className="card-2">
                  <div className="type">Classified</div>
                  <div className="detail">Basic Job Posting</div>
                  <div className="price">Rs. 800</div>
                  <div className="location">For all cities</div>
                  <ul>
                      {
                          this.state.benefits.map((i) => <li className="list-item"><div className="list-image"></div>{i}</li>)
                      }
                  </ul>
                  
                  <div className="net-amount">
                  <div className="quantity">Quantity
                  <input type="number" placeholder="00" required className="number-of-items-2" onChange={this.calculate2}></input></div>
                  <div className="total-2">Total &nbsp; &nbsp; {this.state.total2}</div>
                  </div>
                  <div className="tag-2">{this.state.tag[0]}</div>
                  <Button className="addToCart" onClick={this.orderSummary2}>Add to cart</Button>
                  <Button className ="buyNow" onClick={this.orderSummary2}>Buy Now</Button>

              </div>
              <div className="card-3">
                  <div className="type">JP Lite</div>
                  <div className="detail">Job Posting Lite</div>
                  <div className="price">Rs. 250</div>
                  <div className="location">For all cities</div>
                  <ul>
                      {
                          this.state.benefits.map((i) => <li className="list-item"><div className="list-image"></div>{i}</li>)
                      }
                  </ul>
                  
                  <div className="net-amount">
                  <div className="quantity">Quantity
                  <input type="number" placeholder="00" required className="number-of-items-3" onChange={this.calculate3}></input></div>
                  <div className="total-3">Total &nbsp; &nbsp; {this.state.total3}</div>
                  </div>
                  <div className="tag-3">{this.state.tag[0]}</div>
                  <Button className="addToCart" onClick={this.orderSummary3}>Add to cart</Button>
                  <Button className ="buyNow" onClick={this.orderSummary3}>Buy Now</Button>

              </div>
              </div>
              </div>
            </div>
        )
    }
}

export default Products
