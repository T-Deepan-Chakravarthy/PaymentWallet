import React from 'react'
import store from '../../../store/Store'
import user from '../wallet/User'
import {addbankaccount} from '../../../action/bankaccount/Bank'
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
                wallet:{
                    walletId:40,
                    balance:1000
                }

            }
        }
    }

    handleChange = event =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({bankaccount:{...this.state.bankaccount,[nam]:val}});
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state.bankaccount);
        store().dispatch(addbankaccount(this.state.bankaccount));
    }


    render() {
        return(
            <div className="banner">
            <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <div className="font-weight-bold">
            <h2 className="text-center mb-4">AddBanKAccount</h2>
            </div>
                <form onSubmit={event=>this.handleSubmit(event)}>
                    <div className="form-group">
                    <input 
                    className="form-control form-control-lg"
                    placeholder="Enter your Account Number"
                    name="accountNumber"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    className="form-control form-control-lg"
                    placeholder="Enter your Ifsc Code"
                    name="ifscCode"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    className="form-control form-control-lg"
                    placeholder="Enter your BankName"
                    name="bankName"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    className="form-control form-control-lg"
                    placeholder="Enter your Balance"
                    name="balance"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="row">
                    <div className="input-field col s12 signup-btn">
                    <button className="btn btn-primary btn-block type" type="submit">
                     Add BanK Account
                    </button>
                    </div>
                    </div>
                    </form>
                    </div>
                    </div>
                    </div>
                    
        );
    }
}
