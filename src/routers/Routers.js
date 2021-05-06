import SignUp from "../components/pages/SignUp.js";
import Login from "../components/pages/Login.js";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import Redirected from "../components/pages/Redirected";
import BankAccounts from "../components/pages/BankAccounts";
import Transactions from "../components/pages/Transactions";
import Navbar from "../components/layout/navbar";
import home from "../components/pages/home";
import SendMoney from "../components/pages/SendMoney";
import SingleTransaction from '../components/pages/SingleTransaction';
import BillPayment from '../components/pages/BillPayment';
import AddBankAccounts from '../components/pages/AddBankAccount'
import AddMoney from '../components/pages/AddMoney';
import AddFromBank from '../components/pages/AddFromBank';
import Profile from '../components/pages/Profile';
import UpdateProfile from '../components/pages/UpdateProfile';
import SetPassword from '../components/pages/SetPasswords';
import DepositWithdraw from '../components/pages/DepositWithdraw';
import ViewAccount from '../components/pages/ViewAccount';

class Routers extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={Login} />
            <div>
              <Navbar />
              <PrivateRoute path="/AddBankAccount" component={AddBankAccounts} />
              <PrivateRoute path="/bank-accounts" component={BankAccounts} />
              <PrivateRoute path="/transactions" component={Transactions} />
              <PrivateRoute path="/send-money" component={SendMoney} />
              <PrivateRoute path="/bill-payment" component={BillPayment}/>
              <PrivateRoute path="/" component={home} exact={true}/>
              <PrivateRoute path="/single-transaction" component={SingleTransaction}/>
              <PrivateRoute path="/add-money" component={AddMoney}/>
              <PrivateRoute path="/addFromBank" component={AddFromBank}/>
              <PrivateRoute path="/profile" component={Profile}/>
              <PrivateRoute path="/upate-profile" component={UpdateProfile}/>
              <PrivateRoute path="/set-password" component={SetPassword}/>
              <PrivateRoute path="/deposit-withdraw" component={DepositWithdraw}/>
              <PrivateRoute path="/view-account" component={ViewAccount}/>
            </div>
            <Route component={Redirected} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routers;
