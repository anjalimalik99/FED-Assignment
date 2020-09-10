import React from 'react'
import './side-bar.scss'
function SideBar() {
    return (
        
        <div className ="side-bar">
          <div className = "lgn">
          <div className="head-circle-1">
          <div className="circle">1</div>
          <div className = "heading">Create Account or Login</div>
          </div>
          <div className="first-option">
          <div className="description">Create you company account on Naukari or sign in to proceed with your payment</div>
          <img className= "image" src={require("../../assets/images/image.jpg")}/>
          </div>
           </div>
           <div className="payment">
           <div className="head-circle2">
               <div className="circle2">2</div> 
               <div className = "heading">Make Payment</div>
           </div>  
           <div className="second-option">
            <div className="description">Review order and make payment</div>
            </div>
           </div>
        </div>
    )
}

export default SideBar
