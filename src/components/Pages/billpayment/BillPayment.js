import React from 'react'
import store from '../../../store/Store'
import User from '../wallet/User'
import {addbillpayment} from '../../../action/billpayment/Bill'
export default  class BillPayment extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
             billpayment:{
                billId:"",
                amount:"",
                billType:"",
                paymentDate:"",
                wallet:{...User.getCustomer().wallet}

            }
        }
    }

    handleChange = event =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({billpayment:{...this.state.billpayment,[nam]:val}});
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state.billpayment);
        console.log(User.getCustomer());
        console.log(this.state.billpayment.wallet);
        store().dispatch(addbillpayment(this.state.billpayment));
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
                    placeholder="Enter your amount"
                    name="amount"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <input 
                    className="form-control form-control-lg"
                    placeholder="Enter your Ifsc Code"
                    name=""
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                    <Dropdown name="billType"  onSelect={(event)=>this.handleChange(event)}>
                    
                    </Dropdown>
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
