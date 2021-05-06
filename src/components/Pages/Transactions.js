import {getTransactionList,deleteTransaction} from '../../action/TransactionActions';
import { connect } from 'react-redux';
import User from '../../localstorage/User';
import { useEffect, useState } from 'react';
import {store} from '../../App';

const Transactions = props =>{
    let walletId = User.getCustomer().wallet.walletId;
    
    console.log(walletId);

    // const [list,setList] = useState([{
    //     transactionId : "",
    //     transactionType : "",
    //     transactionDate : "",
    //     description : "",
    //     amount : ""
    // }])

    const [dummy,setDummy] = useState(props.getTransactionList({walletId}));

    // useEffect(()=>{
    //     props.getTransactionList({walletId});
    //     setList(props.list);
    // },[])

    let tempList = props.list;
    

    const [isType,setIsType] = useState(false);

    const [isFrom,setIsFrom] = useState(false);
        
    const [isTo,setIsTo] = useState(false);

    const [isRecipient,setIsRecipient] = useState(false);

    const [type,setType] = useState("");

    const [from,setFrom] = useState("");

    const [to,setTo] = useState("");

    const [recipient,setReceipient] = useState("");

    const [checkFrom,setCheckFrom] = useState(false);

    const [checkTo,setCheckTo] = useState(false);
     
    const filter = () =>{
        let temp=props.list;
        console.log(isType+" type "+type);
        console.log(checkFrom+" check "+isFrom+" from");
        console.log(checkTo+" check "+isTo+" to");
        console.log(isRecipient+" "+recipient);
        try{
        if(isType){
            temp = temp.filter(trans=>trans.transactionType.match(type));
        }
        if(checkFrom && isFrom){
            temp = temp.filter(trans=>(Date.parse(trans.transactionDate))>=(Date.parse(from)));
        }
        if(checkTo && isTo){
            temp = temp.filter(trans=>(Date.parse(trans.transactionDate))<=(Date.parse(to)));
        }
        if(isRecipient){
            temp = temp.filter(trans=>trans.description.match(recipient));
        }
         tempList=temp;
    }catch(error){
        console.log(error);
     }
    }

    useEffect(()=>{
        filter();
    },[isType,type,from,isFrom,checkFrom,to,isTo,checkTo,isRecipient,recipient])
     
    try{
    return (
        <div>
            transactions page
            
            <button type="button" onClick={
                ()=>{
                    setIsType(true);
                    setType("SEND");
                }
            }>Sent</button>
            
            <button type="button" onClick={
                ()=>{
                    setIsType(true);
                    setType("RECEIVE");
                }
            }>Received</button>

            <button type="button" onClick={
                ()=>{
                    setIsType(false);
                }
            }>All</button><br/>
            
            <input type="checkbox" id="fromCheck" onChange={
                ()=>{
                    setCheckFrom(document.getElementById("fromCheck").checked);
                }
            } />

            <input type="Date" id="from" onChange={
                event=>{
                    setIsFrom(true)
                    setFrom(event.target.value);
                }
            } />

            <input type="checkbox" id="toCheck" onChange={
                ()=>{
                    setCheckTo(document.getElementById("toCheck").checked);
                }
            } />

            <input type="Date" id="to" onChange={
                event=>{
                    setIsTo(true);
                    setTo(event.target.value);
                }
            } />
            
            <button type="button" onClick={
                ()=>{
                    setIsRecipient(true);
                    setReceipient("BILL");   
                } 
                }>Bill</button>

            <button type="button" onClick={
                ()=>{
                    setIsRecipient(true);
                    setReceipient("Sending");
                }
            }>Benificiary</button>

            <button type="button" onClick={
                ()=>{
                    setIsRecipient(false);
                }
            }>All</button><br/>
            
            <table border="1px" >
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
                {tempList
                .map(transaction=>{
                    return(
                        <tr>
                            <td>{transaction.transactionId}</td>
                            <td>{transaction.transactionType}</td>
                            <td>{transaction.transactionDate}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.description}</td>
                            <td><button type="button" onClick={
                                ()=>{
                                    let transactionId = transaction.transactionId;
                                    console.log(transactionId)
                                    store.dispatch(deleteTransaction({transactionId}));
                                }
                            }>Delete</button></td>
                            </tr>
                    )
                })}
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
        getTransactionList : ({walletId}) => dispatch(getTransactionList({walletId}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Transactions);