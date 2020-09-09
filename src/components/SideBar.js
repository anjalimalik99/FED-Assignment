import React from 'react'
import '../styles/SideBar.css'
function SideBar() {
  // const [id,setId] = useState()
    return (
        <div className ="side-bar">
          <div className = "lgn">
          <div className = "heading">Create Account or Login</div>
          <div className="description">Create you company account on Naukari or sign in to proceed with your payment</div>
          <img className= "image" src={require("../images/image.jpg")}/>
           </div>
           <div className="payment">
               <div className = "heading">Make Payment</div>
               <div className="description">Review order and make payment</div>
           </div>
        </div>
    )
}

export default SideBar
