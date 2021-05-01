import React from "react";
import { login } from "../../../action/signup/SignUp";
import {Link} from 'react-router-dom';
import store from '../../../store/Store';
import User from '../wallet/User'
import './style.css' 


export default class Login extends React.Component{

    constructor(props){
        super(props);

        this.state={
            customer:{
                name : "",
                mobileNo:"",
                password:"",
                wallet:{
                    walletId:0,
                    balance:0
                }
            },
            error:""
          }
        }     

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({customer:{...this.state.customer, [nam]:val}});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.customer.name+" hel");
        store().dispatch(login(this.state.customer));
        console.log(User);
        
    }

    render() {
        return(
          <div className="banner">
          <div className="container">
          <div className="w-75 mx-auto shadow p-5">
          <div className="font-weight-bold">
          <h2 className="text-center mb-4">LOGIN</h2>
          </div>
              <form onSubmit={event=>this.handleSubmit(event)}>
              <div id="error">{this.state.error}</div>
              <div className="form-group">
                  <input 
                  className="form-control form-control-lg"
                  placeholder="Enter your MobileNumber"
                  name="mobileNo"
                  type="text"
                  onChange={event=>this.handleChange(event)}/>
                  </div>
                  <div className="form-group">
                  <input 
                  className="form-control form-control-lg"
                  placeholder="Enter your Password"
                  name="password"
                  type="text"
                  onChange={event=>this.handleChange(event)}/>
                  </div>
                    <div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <button className="btn btn-primary btn-block" type="submit">
                     Login
                    </button>
                    </div>
                    </div>
                   <h3 className="text-center">OR</h3>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <Link to="/sign-up">
                        <button type="button" className="btn btn-primary btn-block" onClick>SignUp</button>
                    </Link>
                    </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <Link to="/home">
                        <button className="btn btn-primary btn-block" type="button">Home</button>
                    </Link>   
                    </div>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        
      );
    };
}

