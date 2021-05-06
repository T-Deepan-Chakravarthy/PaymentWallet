import {getBankList} from '../../action/BankAccountActions';
import { connect } from 'react-redux';
import User from '../../localstorage/User';
import { useEffect, useState } from 'react';

const AddMoney = props =>{

    let walletId = User.getCustomer().wallet.walletId;

    const [list,setList] = useState([{
        accountNo : "",
        ifscCode : "",
        bankName : "",
        balance : ""
    }]);

    useEffect(()=>{
        props.getBankList({walletId});
    },[]);
    
    return (
        <div>
            add money pag
            <table border="1px" >
                <tr>
                    <th>Account No</th>
                    <th>Ifsc Code</th>
                    <th>Bank Name</th>
                    <th>Balance</th>
                </tr>
                {props.list.map(bank=>{
                    return(
                        <tr>
                            <td>
                            <button type="button" onClick={
                                () => {
                                    User.setBank(bank);
                                    props.history.push("/addFromBank");
                                }
                            }
                            >{bank.accountNo}</button>             
                            </td>
                            <td>{bank.ifscCode}</td>
                            <td>{bank.bankName}</td>
                            <td>{bank.balance}</td>
                        </tr>
               )
                })
                }
            </table>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        list : state
    }
}

const mapDispatchToProps = (dispatch,{walletId}) =>{
    return{
        getBankList : ({walletId}) => dispatch(getBankList({walletId}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddMoney);