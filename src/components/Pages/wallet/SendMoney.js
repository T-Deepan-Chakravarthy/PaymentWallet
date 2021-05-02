import {getList} from '../../../action/signup/SignUp';
import { connect } from 'react-redux';
import User from '../wallet/User';

const SendMoney = props =>{
    props.getList();
    return (
        <div>
            send money page    
            <table border="1px" >
                <tr>
                    <th>Name</th>
                    <th>Mobile Number</th>
                </tr>
                {props.list.map(customer=>{
                    return(
                        <tr>
                            <td>{customer.name}</td>
                            <td>{customer.mobileNo}</td>
                        </tr>
                    )
                })}   
            </table>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        list : state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getList : () => dispatch(getList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendMoney);