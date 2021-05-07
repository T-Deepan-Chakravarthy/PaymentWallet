import {getBankList, deleteBank} from '../../action/BankAccountActions';
import { connect } from 'react-redux';
import User from '../../localstorage/User';
import { useEffect, useState } from 'react';
import store from '../../store/Store';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


const BankAccounts = props =>{

    let walletId = User.getCustomer().wallet.walletId;
    console.log(walletId);

    // const Store = store();

    // const [list,setList] = useState([{
    //     accountNo : "",
    //     ifscCode : "",
    //     bankName : "",
    //     balance : ""
    // }]);

    //const [dummy,setDummy] = useState(props.getBankList({walletId}));
    
    useEffect(()=>{
        props.getBankList({walletId});
    },[])

    // useEffect(()=>{
    //     (async function prepare(){
    //         await props.getBankList({walletId});
    //         // setList(props.list);
    //     }())
    // },[])
// 
    // useEffect(()=>{
        // Store.dispatch(getBankList({walletId}));
    // },[])

    // useEffect(()=>{
        // console.log(props.list);
        // console.log(store.getState());
        // setList([...store.getState()]);
        // setList(props.list);
        // setList(Store.getState());
        // console.log(store.getState());
        // console.log(list);
    // },[props.list])

    // useEffect(()=>{
        // setList(Store.getState());
    // },[Store.getState().length])
    
    try{
    return (
        <div>
            <div>
            <div class="ui hidden divider"></div>
                <Link to="/AddBankAccount">
                <Button  variant="contained" color="primary" type="button">AddBankAccount</Button>
                </Link>
            </div>
                <table  class="ui teal very compact table"  >
                <tr>
                    <th>Account No</th>
                    <th>Ifsc Code</th>
                    <th>Bank Name</th>
                    <th>Balance</th>
                    <th>Delete</th>
                </tr>
                {props.list.map(bank=>{
                    return(
                        <tr>
                            <td>
                                <Button variant="contained" color="primary" type="button" onClick={
                                    ()=>{
                                    User.setBank(bank);
                                    props.history.push('/view-account')
                                }}>
                                    {bank.accountNo}
                                </Button>
                            </td>
                            <td>{bank.ifscCode}</td>
                            <td>{bank.bankName}</td>
                            <td>{bank.balance}</td>
                            <td><Button variant="contained" color="secondary" type="button" onClick={
                                ()=>{
                                    let accountNo = bank.accountNo;
                                    console.log(accountNo)
                                    store.dispatch(deleteBank({accountNo},bank.ifscCode));
                                }
                            }>Delete</Button></td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    );
    }catch(error){
        return (<div>LOADING</div>);
    }
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

// export default class BankAccounts extends React.Component{

//     constructor(props){
//         super(props);

//         this.state=[
//             {
//                 accountNo : "",
//                 ifscCode : "",
//                 bankName : "",
//                 balance : ""
//             }
//         ]
//     }

//     componentWillMount = async() =>{
//         await 
//     }
// }