import React, { Component } from 'react'
import Header from "../../components/header";
import SideBar from "../../components/side-bar"
import Login from '../../components/login';
import Register from '../../components/registration';
import { connect } from 'react-redux';
import "./login-register.scss";
export class LoginRegister extends Component {
   
    render() {
        return (
            <div className="main">
                 <Header/>
                  <div className="container">
                   <SideBar/>
            <div className="form-1">
                              {this.props.lgnReg === "login" ? <Login/> : <Register/>}
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
