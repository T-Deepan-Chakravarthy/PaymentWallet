import React from "react";
import { login } from "../../../action/signup/SignUp";
import {Link} from 'react-router-dom';
import store from '../../../store/Store';
import './style.css' 
import CustomerValidations from './CustomerValidations'

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
            }
        }
        this.validators = CustomerValidations;
        this.resetValidators();
        this.displayValidationErrors = this.displayValidationErrors.bind(this);
        this.updateValidators = this.updateValidators.bind(this);
        this.resetValidators = this.resetValidators.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    updateValidators(fieldName, value) {
        this.validators[fieldName].errors = [];
        this.validators[fieldName].state = value;
        this.validators[fieldName].valid = true;
        this.validators[fieldName].rules.forEach((rule) => {
          if (rule.test instanceof RegExp) {
            if (!rule.test.test(value)) {
              this.validators[fieldName].errors.push(rule.message);
              this.validators[fieldName].valid = false;
            }
          } else if (typeof rule.test === 'function') {
            if (!rule.test(value)) {
              this.validators[fieldName].errors.push(rule.message);
              this.validators[fieldName].valid = false;
            }
          }
        });
      }
      
      resetValidators() {
          Object.keys(this.validators).forEach((fieldName) => {
          this.validators[fieldName].errors = [];
          this.validators[fieldName].state = '';
          this.validators[fieldName].valid = false;
        });
      }
      
      displayValidationErrors(fieldName) {
        const validator = this.validators[fieldName];
        const result = '';
        if (validator && !validator.valid) {
          const errors = validator.errors.map((info, index) => {
            return <span className="error" key={index}>* {info}</span>;
          });
    
          return (
            <div className="col s12 row">
              {errors}
            </div>
          );
        }
        return result;
      }
      
      isFormValid() {
        let status = true;
        Object.keys(this.validators).forEach((field) => {
          if (!this.validators[field].valid) {
            status = false;
          }
        });
        return status;
      }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.updateValidators(nam,event.target.value);
        this.setState({...this.state.customer, [nam]:val});
    }

    handleSubmit = event => {
        event.preventDefault();
        store().dispatch(login(this.state.customer));
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
              <div className="form-group">
                  <input 
                  id="number"
                  className="form-control form-control-lg"
                  placeholder="Enter your MobileNumber"
                  name="mobileNo"
                  type="text"
                  onChange={(event)=>this.handleChange(event)}/>
                  </div>
                  <div className="form-group">
                  <input 
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your Password"
                  name="password"
                  type="password"
                  onChange={(event)=>this.handleChange(event)}/>
                  </div>
                    <div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <button className={`btn btn-primary btn-block ${this.isFormValid() ? '' : 'disabled'}`} type="submit">
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
                        </form>
                    </div>
                </div>
            </div>
        
        );
    };
}

