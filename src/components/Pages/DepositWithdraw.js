import { connect } from "react-redux";
import User from "../../localstorage/User";
import { withdraw, deposit } from "../../action/WalletActions";
import { store } from "../../App";
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { FormControl,TextField } from "@material-ui/core";

const DepositWithdraw = (props) => {
  const [trans, setTrans] = useState({
      transactionId:1,
      transactionDate:"",
      transactionType:"",
      amount:"",
      description:""
  });

  useEffect(()=>{
    setTrans({...props.transaction});
  },[props.transaction])

  let walletId = User.getCustomer().wallet.walletId;

  return (
    <div>
      <div>
        {User.target}</div>
        <div>
        <div class="ui input">
        <input type="number" id="amount" /><br/>
        </div>
        <div class="ui divider"></div>
             <img class="ui top aligned tiny image" src=""/>
        <Button
        variant="contained" color="secondary" 
          type="button"
          onClick={() => {
              console.log(walletId);
            let amount = document.getElementById("amount").value;
            store.dispatch(
              withdraw({walletId}, { amount }),
            );
          }}
        >
          WITHDRAW
        </Button>
        <div class="ui divider"></div>
        <img class="ui top aligned tiny image" src=""/>
        
        <Button
         variant="contained" color="primary" 
          type="button"
          onClick={() => {
            let amount = document.getElementById("amount").value;
            console.log("dispatch");
            store.dispatch(
              deposit({walletId}, { amount }),
            );
          }}
        >
          Deposit
        </Button>
        <div class="ui divider"></div>
      </div>
      {trans.transactionDate}
      {trans.transactionType}
      {trans.amount}
      {trans.description}
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transaction : state.transaction,
  };
};

const mapDispatchToPropsWith = (dispatch) => {
  return {
    withdraw : (walletId, amount) => dispatch(withdraw())
  };
};

const mapDispatchToPropsDep = (dispatch) => {
    return {
      deposit : (walletId, amount) => dispatch(deposit())
    };
  };

export default connect(mapStateToProps, mapDispatchToPropsWith, mapDispatchToPropsDep)(DepositWithdraw);
