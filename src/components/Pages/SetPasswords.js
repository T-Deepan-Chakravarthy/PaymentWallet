import { connect } from 'react-redux';
import User from '../../localstorage/User';
import {update} from '../../action/WalletActions';
import Button from '@material-ui/core/Button';

const SetPassword = props => {

    const handleSubmit = event => {
        event.preventDefault();
        let customer = User.getCustomer();
        if(document.getElementById("password").value===document.getElementById("confirm").value){
            customer = {...customer,password:document.getElementById("password").value};
            console.log(customer);
            props.update(customer);
            // props.history.push('/profile')
        }
    }

    return(
        <div>
            <div class="ui hidden divider"></div>
            <div class="ui centered card">
            <div class="content">
    <a class="header">SET PASSWORD<br/></a></div>
            <form onSubmit={event=>handleSubmit(event)}>
            <div class="ui input">
                <input type="text" placeholder="Enter password" id="password" />
                </div>
                <div class="ui hidden divider"></div>
                <div class="ui input">
                 <input type="text" placeholder="Enter confirm password" id="confirm" />
                </div>
                <div class="ui hidden divider"></div>
                <span>
                <Button variant="contained" color="primary"  type="submit">Set Password</Button>
         
         </span>   </form>
            </div>
            <div class="ui hidden divider"></div>
        </div>
        
    )
}

const mapStateToProps = state =>({
    customer : state
})

const mapDispatchToProps = (dispatch,customer) =>{
    return{
        update : (customer)=>dispatch(update(customer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetPassword);