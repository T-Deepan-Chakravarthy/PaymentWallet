import React from 'react'
import {store} from '../../App'
import User from '../../localstorage/User'
import {addbillpayment} from '../../action/TransactionActions'
import Box from '@material-ui/core/Box';
import { FormControl, TextField } from '@material-ui/core';
export default  class BillPayment extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
             billpayment:{
                billId:0,
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
        store.dispatch(addbillpayment(this.state.billpayment));
        setTimeout(this.checkCreated,1000);
    }

    checkCreated=()=>{
        if(User.getBillCreated()){
            alert("Bill Created");
        }
    }


    render() {
        return(
            <section class="container-fluid bg">
            <section class= "row justify-content-center">
            <section class="col-12 col-sm-6 col-md-3">
            <div>
                <form class="form-container" onSubmit={(event)=>this.handleSubmit(event)}>
                <div>
                        <Box color="primary.main"> <h2>ADDBILL</h2></Box>
                </div>
                 <FormControl>
                 <TextField
                  required id="standard-textarea" 
                    placeholder="Enter your amount"
                    name="amount"
                    type="text"
                    onChange={(event)=>this.handleChange(event)}/>
                    </FormControl>
                    <FormControl>
                    <select name="billType" multiple="" class="ui fluid dropdown" onChange={(event)=>this.handleChange(event)}>
                    <option value="DTH">DTH</option>
                    <option value="MOBILEPREPAID">MOBILEPREPAID</option>
                    <option value="MOBILEPOSTPAID">MOBILEPOSTPAID</option>
                    <option value="CREDITCARD">CREDITCARD</option>
                    <option value="LPG">LPG</option>
                    </select>
                    </FormControl><br/>
                    <br/><br/>
                     <button  className="btn btn-primary btn-block"  type="submit">AddBill</button> <br/>
                    </form>
                    </div>
                    </section>
            </section >
            </section > 
                    
        );
    }
}
