import React, { Component } from 'react'
import Header from "../../components/header";
import SideBar from "../../components/side-bar"
import Login from '../../components/login';
import Register from '../../components/registration';
import { connect } from 'react-redux';
import {loggedIn, changeComponent} from "../../components/actions/cartActions";
import "./login-register.scss"
export class LoginRegister extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentPage:"register"
        }
    }
   
    render() {
        return (
            <div className="main">
                 <Header></Header>
                  <div className="container">
                   <SideBar></SideBar>
            <div className="form-1">
                              {this.props.lgnReg === "login" ? <Login></Login> : <Register></Register>}
                  </div>
                  </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lgnReg: state.lgnReg
    }
}

export default connect(mapStateToProps)(LoginRegister);
