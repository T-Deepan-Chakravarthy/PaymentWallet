import { connect } from 'react-redux';
import User from '../../localstorage/User';
import {update} from '../../action/WalletActions';
import Button from '@material-ui/core/Button';

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
            <div class="ui inverted segment">
            <div class="ui input">
                <input  placeholder="Enter Your Name" type="text" id="name" />
            </div>
            </div>
                <Button variant="contained" color="primary"  type="submit">Update</Button>
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