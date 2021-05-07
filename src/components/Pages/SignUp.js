import React from 'react';
import {createAccount} from '../../action/WalletActions';
import {store} from '../../App'
import User from '../../localstorage/User';
import SignUpValidations from './SignUpValidations'
import Box from '@material-ui/core/Box';
import { FormControl, TextField } from '@material-ui/core';
import "./styles.css"
import {Link} from 'react-router-dom';


export default class CreateAccount extends React.Component{

    constructor(props){
        super(props);
        this.state={
            customer:{
                name : "",
                mobileNo:"",
                password:"",
                wallet:{
                    walletId:0,
                    balance:1000
                }
            }
        }
        this.validators = SignUpValidations;
        this.resetValidators();
    }
     
    updateValidators = (fieldName, value) => {
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

    resetValidators = () => {
        Object.keys(this.validators).forEach((fieldName) => {
            this.validators[fieldName].errors = [];
            this.validators[fieldName].state = '';
            this.validators[fieldName].valid = false;
        });
    }

    displayValidationErrors = (fieldName) => {
        const validator = this.validators[fieldName];
        const result = '';
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => {
                return <span style={errorStyle} key={index}>* {info}</span>;
            }); 
            return (
                <div style={errorStyle} className="col s12 row">
                    {errors}
                </div>
            ); 
        }
        return result;
    }
    
    isFormValid = () => {
        let status = true;
        Object.keys(this.validators).forEach((field) => {
            if (!this.validators[field].valid) {
                status = false;
            }
        });
        return status;
    }


    handleChange = event =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.updateValidators(nam,event.target.value);
        this.setState({customer:{...this.state.customer,[nam]:val}});
    }

    handleSubmit = event =>{
        event.preventDefault();
        store.dispatch(createAccount(this.state.customer));
        setTimeout(this.checkLogin,1000);
    }

    checkLogin=()=>{
        if(User.getLoggedIn()){
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <section class="container-fluid bg">
            <section class= "row justify-content-center">
            <section class="col-12 col-sm-6 col-md-3"> 
            <div>
                <form class="form-container" onSubmit={event=>this.handleSubmit(event)}>
                    <div>
                        <Box color="primary.main"> <h2>SIGNUP</h2></Box>
                    </div>
                 <FormControl>
                 <TextField
                  required id="standard-textarea" 
                  placeholder="Enter your Name"
                  label="Name"
                  type="text" name="name" onChange={event=>this.handleChange(event)}/>
                  </FormControl>
                  {this.displayValidationErrors('name')}
                  <FormControl>
                 <TextField
                  required id="standard-textarea" 
                  placeholder="Enter your Mobile No"
                  label="Mobile Number"
                  type="text" name="mobileNo" onChange={(event)=>this.handleChange(event)}/>
                  </FormControl>
                  {this.displayValidationErrors('mobileNo')}
                  <FormControl>
                  <TextField
                  required id="standard-textarea" 
                  placeholder="Enter your Password"
                  label="Password" type="password" name="password" onChange={(event)=>this.handleChange(event)}/>
                    </FormControl>
                    {this.displayValidationErrors('password')}
                   <br/><br/>
                 <button  className={`btn btn-primary btn-block ${this.isFormValid() ? '' : 'disabled'}`}  type="submit">SignUp</button> <br/>
                 <Link to="/login">
                        <button  className="btn btn-primary btn-block" type="button" >LOGIN</button>
                    </Link>  
                </form>
            </div>
            </section>
            </section>
            </section>
        );
    }
}

const errorStyle = {
    color: 'red'
};