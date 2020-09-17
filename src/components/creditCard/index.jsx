import React, { Component } from 'react'
import  './credit-card.scss'

export class CreditCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedCard:""
        }
    }
    cardSelect = (value) =>
    {
        this.setState({
            selectedCard: value
        },
        () => {
        let el = document.querySelectorAll(".cardname");
        console.log(el);
        var classname = "cardname";
        for(let i=0 ;i < el.length ;i++)
        {
        el[i].className = classname;
        }
    
        let el1 = document.querySelector(`#${value}`);
        el1.className="cardname"+" active";
        console.log(el1);
        })
    }
    
    render() {
        return (
            <div className="credit-card">
               <label className="merchant">Merchant Name</label>
               <div className="cards">
                   <div id="card-1" className="cardname" onClick={() => this.cardSelect("card-1")}></div>
                   <div id="card-2" className="cardname" onClick={() => this.cardSelect("card-2")}></div>
                   <div  id="card-3" className="cardname" onClick={() => this.cardSelect("card-3")}></div>
                   <div  id="card-4" className="cardname" onClick={() => this.cardSelect("card-4")}></div>
               </div>
            </div>
        )
    }
}

export default CreditCard
