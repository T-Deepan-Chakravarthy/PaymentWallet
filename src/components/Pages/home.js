import {Link} from 'react-router-dom';

const home = () =>{
    console.log("home");
    return(
        <div>
            <Link to='/send-money'><button type="button">Send</button></Link>
            <Link to='/Bill-payment'><button type="button">BillPayment</button></Link>
            <Link to='/add-money'><button type="button">Add Money To Wallet</button></Link>
            <Link to='/deposit-withdraw'><button type="button">Deposit or Withdraw</button></Link>
        </div>
    )
}

export default home;