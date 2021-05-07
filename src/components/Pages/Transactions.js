import {getTransactionList,deleteTransaction} from '../../action/TransactionActions';
import { connect } from 'react-redux';
import User from '../../localstorage/User';
import { useEffect, useState } from 'react';
import {store} from '../../App';
import Button from '@material-ui/core/Button';


const Transactions = props =>{
    let walletId = User.getCustomer().wallet.walletId;
    
    useEffect(()=>{
        props.getTransactionList({walletId});
    },[])

    console.log(walletId);

    let tempList = props.list;
    
    const [renderList,setRenderList] = useState(tempList);

    // const [list,setList] = useState([{
    //     transactionId : "",
    //     transactionType : "",
    //     transactionDate : "",
    //     description : "",
    //     amount : ""
    // }])

    //const [dummy,setDummy] = useState(props.getTransactionList({walletId}));
    // useEffect(()=>{
    //     props.getTransactionList({walletId});
    //     setList(props.list);
    // },[])

    

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
        console.log(temp);
        console.log(tempList);
        setRenderList(temp);
        console.log(renderList);
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
            <div class="ui segment pushable">
                <div class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
                    <a class="item">
                        <i aria-hidden="true" ></i> <Button variant="contained" color="primary" type="button" onClick={
                ()=>{
                    setIsType(true);
                    setType("SEND");
                    console.log("send");
                }
            }>Sent</Button></a>
                        <a class="item"><i aria-hidden="true" ></i> <Button variant="contained" color="primary" type="button" onClick={
                ()=>{
                    setIsType(true);
                    setType("RECEIVE");
                }
            }>Received</Button><br/></a>
            <a class="item"><i aria-hidden="true" ></i><Button variant="contained" color="primary" type="button" onClick={
                ()=>{
                    setIsType(false);
                }
            }>All</Button><br/></a>
           
            
           <a class="item"><i aria-hidden="true" ></i><input type="checkbox" id="fromCheck" onChange={
                ()=>{
                    setCheckFrom(document.getElementById("fromCheck").checked);
                }
            } />
            <br/></a>
       
            <a class="item"><i aria-hidden="true" ></i><input type="checkbox" id="toCheck" onChange={
                ()=>{
                    setCheckTo(document.getElementById("toCheck").checked);
                }
            } /><br/></a>

          <a class="item"><i aria-hidden="true" ></i><input type="Date" id="to" onChange={
                event=>{
                    setIsTo(true);
                    setTo(event.target.value);
                }
            } /><br/></a>

               <a class="item"><i aria-hidden="true"></i><input type="Date" id="from" onChange={
                event=>{
                    setIsFrom(true);
                    setFrom(event.target.value);
                }
            } /><br/></a>

          <a class="item"><i aria-hidden="true"></i><Button variant="contained" color="primary" type="button" onClick={
                ()=>{
                    setIsRecipient(true);
                    setReceipient("BILL");   
                } 
                }>Bill</Button><br/></a>


           <a class="item"><i aria-hidden="true" ></i> <Button variant="contained" color="primary" type="button" onClick={
                ()=>{
                    setIsRecipient(true);
                    setReceipient("Sending");
                }
            }>Benificiary</Button><br/></a>

           <a class="item"><i aria-hidden="true" ></i><Button variant="contained" color="primary" type="button" onClick={
                ()=>{
                    setIsRecipient(false);
                }
            }>All</Button><br/></a>

            </div><div class="pusher"><div class="ui basic segment"><h3 class="ui header"></h3><img src="https://img.freepik.com/free-photo/finance-money-transaction-technology_31965-1134.jpg?size=626&ext=jpg" class="ui image"/></div></div></div>
           
        
            <table   class="ui teal very compact table"  border="1px" >
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
                {renderList
                .map(transaction=>{
                    return(
                        <tr>
                            <td>{transaction.transactionId}</td>
                            <td>{transaction.transactionType}</td>
                            <td>{transaction.transactionDate}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.description}</td>
                            <td><Button variant="contained" color="secondary" import  type="button" onClick={
                                ()=>{
                                    let transactionId = transaction.transactionId;
                                    console.log(transactionId)
                                    store.dispatch(deleteTransaction({transactionId}));
                                }
                            }>Delete</Button></td>
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