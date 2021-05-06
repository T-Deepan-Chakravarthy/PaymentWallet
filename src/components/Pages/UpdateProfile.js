import { connect } from 'react-redux';
import User from '../../localstorage/User';
import {update} from '../../action/WalletActions';

const UpdateProfile = props =>{

    const handleSubmit = event =>{
        event.preventDefault();
        let customer = {...User.getCustomer()};
        customer.name = document.getElementById("name").value;
        console.log(customer);
        props.update(customer);
        
        // props.history.push('/profile');
    }

    return(
        <div>
            <form onSubmit={event=>handleSubmit(event)}>
                <input type="text" id="name" />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

const mapStateToProps = state =>({
    customer : state
})

const mapDispatchToProps = (dispatch,customer) =>{
    return{
        update : (customer) => dispatch(update(customer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateProfile);