import React from 'react'
import {store} from '../../App'
import User from '../../localstorage/User'
import {addbankaccount} from '../../action/BankAccountActions'
import BankValidations from './BankValiidations'
import './styles.css'
import Box from '@material-ui/core/Box';
import { FormControl, TextField } from '@material-ui/core';

export default  class AddBanKAccount extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            bankaccount:{
                accountNo:"",
                ifscCode:"",
                bankName:"",
                balance:"",
                wallet:{...User.getCustomer().wallet}

            }
        }
        this.validators = BankValidations;
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
        this.setState({bankaccount:{...this.state.bankaccount,[nam]:val}});
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state.bankaccount);
        console.log(User.getCustomer());
        console.log(this.state.bankaccount.wallet);
        store.dispatch(addbankaccount(this.state.bankaccount));
        setTimeout(this.checkCreated,1000);
    }

    checkCreated=()=>{
        if(User.getBankCreated()){
            alert("Bank account added");
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
                        <Box color="primary.main"> <h2>ADDBANKACCOUNT</h2></Box>
                </div>
                <FormControl>
                 <TextField
                  required id="standard-textarea" 
                  placeholder="Enter your Account No"
                  label="Account No"
                  placeholder="Enter your Account Number"
                  name="accountNo"
                   type="text"
                   onChange={(event)=>this.handleChange(event)}/>
                </FormControl>
                {this.displayValidationErrors('accountNo')}
                <FormControl>
                 <TextField
                  required id="standard-textarea" 
                  placeholder="Enter your IFSC CODE"
                  label="IFSC CODE"
                    placeholder="Enter your Ifsc Code"
                    name="ifscCode"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </FormControl>
                    {this.displayValidationErrors('ifscCode')}  
                    <FormControl>
                 <TextField
                  required id="standard-textarea" 
                  placeholder="Enter your BankName"
                  label="BankName"
                    name="bankName"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </FormControl>
                    {this.displayValidationErrors('bankName')}  
                    <FormControl>
                 <TextField
                  required id="standard-textarea" 
                  placeholder="Enter your Balance"
                    placeholder="Enter your Balance"
                    name="balance"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                     </FormControl>
                     {this.displayValidationErrors('balance')}
                    <br/><br/>
                     <button  className={`btn btn-primary btn-block ${this.isFormValid() ? '' : 'disabled'}`}  type="submit">AddBankAccounts</button> <br/>
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