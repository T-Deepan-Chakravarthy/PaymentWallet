import {Link} from 'react-router-dom';
import User from '../wallet/User';
import { connect } from 'react-redux';
import {getBankList} from '../../../action/bankaccount/Bank'

const BankAccounts = (props) => { 
    props.getBankList(User.getCustomer().wallet.walletId)
    
    return(
        <div>
            <Link to ="/AddBankAccount">
            <button type="button">Button</button>
            </Link>
            <h2>Lists Of Bank Accounts</h2>
            <table border ="1px">
            <tr>
                <th>Bank Name</th>
                <th>Account Number</th>
                <th>Ifsc code</th>
            </tr>
            {props.list.map(bankaccount =>{
                return(
                    <tr>
                        <td>{bankaccount.bankName}</td>
                        <td>{bankaccount.accountNo}</td>
                        <td>{bankaccount.ifscCode}</td>
                    </tr>
                )
            } )}
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
        getBankList : () => dispatch(getBankList(User.getCustomer().wallet.walletId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BankAccounts);