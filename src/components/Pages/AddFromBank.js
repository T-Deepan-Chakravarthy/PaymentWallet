import { connect } from "react-redux";
import User from "../../localstorage/User";
import { addMoney } from "../../action/WalletActions";
import { store } from "../../App";
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';


const AddFromBank = (props) => {

    let walletId = User.getCustomer().wallet.walletId;

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



  return (
    <div>
      <div>
        {User.target}
        <div class="ui input">
        <input placeholder="Enter your amount" type="number" id="amount" />
        </div>
        <Button variant="contained" color="primary"
          type="button"
          onClick={() => {
            let amount = document.getElementById("amount").value;
            store.dispatch(
              addMoney(User.getBank(), {walletId}, { amount }),
              console.log(props.transaction)
            );
          }}
        >
          Add
        </Button>
      </div>
        {trans.transactionType}
        {trans.amount}
        {trans.description}
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMoney : (account, {walletId}, {amount}) => dispatch(addMoney()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFromBank);