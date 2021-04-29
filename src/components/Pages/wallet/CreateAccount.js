import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import CustomerValidations from './CustomerValidations';
import './style.css'



export default class CreateAccount extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: '',
        password: '',
        mobileNo:'',
      }
    };

    // Set of validators for signin form
    this.validators = CustomerValidations;
    
    // This resets our form when navigating between views
    this.resetValidators();

    // Correctly Bind class methods to reacts class instance
    this.handleInputChange = this.handleInputChange.bind(this);
    this.displayValidationErrors = this.displayValidationErrors.bind(this);
    this.updateValidators = this.updateValidators.bind(this);
    this.resetValidators = this.resetValidators.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  
  /** 
   * This function is called whenever a form input is changed
   * Which in turn updates the state of this component and validators
   */
  onSubmit(e)
  {
    e.preventDefault();
    let customer = {name: this.state.userinfo.name, password: this.state.userinfo.password, mobileNo: this.state.userinfo.mobileNo};
    console.log('employee => ' + JSON.stringify(customer));

    this.setState((state) => ({  ...state,error: '' }));
            this.props.onSubmitCustomer(
                
                {
                   userInfo:{ 
                    name: this.state.userInfo.name,
                    password: this.state.userInfo.password,
                    mobileNo : this.state.userInfo.mobileNo
                   }
                },
                
            );
  }
  handleInputChange(event, inputPropName) {
    const newState = Object.assign({}, this.state);
    newState.userInfo[inputPropName] = event.target.value;
    this.setState(newState);
    this.updateValidators(inputPropName, event.target.value);
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
  
  // This function resets all validators for this form to the default state
  resetValidators() {
    Object.keys(this.validators).forEach((fieldName) => {
      this.validators[fieldName].errors = [];
      this.validators[fieldName].state = '';
      this.validators[fieldName].valid = false;
    });
  }
  
  // This function displays the validation errors for a given input field
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
  
  // This method checks to see if the validity of all validators are true
  isFormValid() {
    let status = true;
    Object.keys(this.validators).forEach((field) => {
      if (!this.validators[field].valid) {
        status = false;
      }
    });
    return status;
  }
  
  // Renders the template
  render() {
    return (
      <div className="banner">
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <div className="font-weight-bold">
        <h2 className="text-center mb-4">CREATE ACCOUNT</h2>
        </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <input
                  id="name"
                  className="form-control form-control-lg"
                  placeholder="Enter your Name"
                  name="name"
                  type="text"
                  value={this.state.userInfo.username}
                  onChange={event => this.handleInputChange(event, 'name')}
                />
              { this.displayValidationErrors('name') }
            </div>
              <div className="form-group">
                <input
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your Password"
                  type="password"
                  value={this.state.userInfo.password}
                  onChange={event => this.handleInputChange(event, 'password')}
                />
              { this.displayValidationErrors('password') }
            </div>
              <div className="form-group">
                <input
                  id="mobileNo"
                  type="number"
                  name="mobilenumber"
                  className="form-control form-control-lg"
                  placeholder="Enter your Mobile Number"
                  value={this.state.userInfo.mobileNo}
                  onChange={event => this.handleInputChange(event, 'mobileNo')}
                />
              { this.displayValidationErrors('mobileNo') }
            </div>
            <div className="row">
              <div className="input-field col s12 signup-btn">
                <button className={`btn btn-primary btn-block ${this.isFormValid() ? '' : 'disabled'}`} >
                   SignUp
                </button>
              </div>
            </div>
          </form>
          <div>
          <h4 className="text-center">OR</h4>
          </div>
          <div className="row">
              <div className="input-field col s12 signup-btn">
                <button className="btn btn-primary btn-block">
                   Login
                </button>
              </div>
          </div>
          </div>
        </div>
       </div>      
    );
  }
}