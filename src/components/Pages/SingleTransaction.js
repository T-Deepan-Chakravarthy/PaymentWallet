import { connect } from "react-redux";
import User from "../../localstorage/User";
import { fundTransfer } from "../../action/WalletActions";
import { store } from "../../App";
import { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';

const SingleTransaction = (props) => {
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
      <div>Amount sent to:
        {User.target}
        <div class="ui inverted segment">
      <div class="ui inverted left icon input">
        <input type="number" id="amount" />
        </div>
        </div>
        <Button
          type="button" variant="contained" color="primary" 
          onClick={() => {
            let amount = document.getElementById("amount").value;
            store.dispatch(
              fundTransfer(User.getCustomer().mobileNo, User.target, { amount }),
              console.log(props.transaction)
            );
          }}
        >
          Send
        </Button>
      </div>
      {trans.transactionId}
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
    transaction: state.transaction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fundTransfer: (source, target, amount) => dispatch(fundTransfer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTransaction);
