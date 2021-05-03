import {getList} from '../../../action/signup/SignUp';
import { connect } from 'react-redux';
import User from './User';
import store from '../../../store/Store';
import {fundTransfer} from '../../../action/signup/SignUp';

const SendMoney = props =>{
    props.getList();
    
    return (
        <div>
            send money page
            <input type="text" id="search" />
            <table border="1px" >
                <tr>
                    <th>Name</th>
                    <th>Mobile Number</th>
                </tr>
                {props.list.filter(customer=>customer.mobileNo!==User.getCustomer().mobileNo)
                .filter(customer=>customer.mobileNo.match(document.getElementById("search").value))
                .map(customer=>{
                    return(
                        <tr>
                            <td>{customer.name}</td>
                            <button type="button" onClick={()=>{
                                document.getElementById("selected").innerHTML=customer.mobileNo;
                                document.getElementById("search").value = customer.mobileNo;
                                }}><td>{customer.mobileNo}</td></button>
                        </tr>
                    )
                })
                }
            </table>
            <div id="selected"></div>
            <input type="number" id="amount"/>
            <button type="button" onClick={()=>{
                store().dispatch(fundTransfer(User.getCustomer().mobileNo,document.getElementById("search").value,document.getElementById("amount").value));
            }}>Send</button>
            
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