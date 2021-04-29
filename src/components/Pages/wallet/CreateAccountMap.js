import React from 'react';
import CreateAccount  from './CreateAccount';
import { connect } from 'react-redux';
import { addCustomer } from '../../../action/signup/SignUp';

const AddCustomer = (props) => (
    <div >
        <h3>Set Customer information:</h3>
        <CreateAccount customer={props.customer}
            onSubmitCustomer={(customer) => {
                console.log("hi "+customer.userInfo.name+customer.userInfo.password+customer.userInfo.mobileNo)
                props.dispatch(addCustomer(customer));
                props.history.push('/');
            }}
        />
    </div>
);
//export default connect()(AddEmployee);

const mapStateToProps = (state,props) => {
    return {
                    customer:state
    };
};

export default connect(mapStateToProps)(AddCustomer);