import {getBankList} from '../../../action/bankaccount/Bank'
import { connect } from 'react-redux';
import User from '../wallet/User';
import {Link} from 'react-router-dom';

const BankAccounts = props =>{
    let walletId = User.getCustomer().wallet.walletId;
    props.getBankList({walletId});    
    return (
        <div>
            send money page
            <Link to ="/AddBankAccount">
            <button type="button">Button</button>
            </Link>
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
                            <td>{bank.accountNo}</td>
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

export default connect(mapStateToProps,mapDispatchToProps)(BankAccounts);