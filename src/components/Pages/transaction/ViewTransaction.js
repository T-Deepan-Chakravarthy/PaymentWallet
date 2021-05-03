import {getTransactionList} from '../../../action/transaction/ViewTransaction';
import { connect } from 'react-redux';
import User from '../wallet/User';

const Transactions = props =>{
    let walletId = User.getCustomer().wallet.walletId;
    props.getTransactionList({walletId});    
    return (
        <div>
            send money page
            <table border="1px" >
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
                {props.list.map(transaction=>{
                    return(
                        <tr>
                            <td>{transaction.transactionId}</td>
                            <td>{transaction.transactionType}</td>
                            <td>{transaction.transactionDate}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.description}</td>
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
        getTransactionList : ({walletId}) => dispatch(getTransactionList({walletId}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Transactions);