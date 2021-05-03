import SignUp from "../components/pages/wallet/CreateAccount";
import Login from "../components/pages/login/Login";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
import PrivateRoute from "../routers/PrivateRoute";
import Redirected from "../components/pages/Redirected";
import BankAccounts from "../components/pages/bankaccount/ViewBankAccount";
import AddBanKAccount from "../components/pages/bankaccount/AddBankAccount";
import Transactions from "../components/pages/transaction/ViewTransaction";
import Navbar from "../components/layout/NavBar";
import home from "../components/pages/wallet/Home";
import SendMoney from "../components/pages/wallet/SendMoney";
import BillPayment from "../components/pages/billpayment/BillPayment"


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
              <PrivateRoute path="/AddBanKAccount"  component={AddBanKAccount}/>
              <PrivateRoute path="/bank-accounts" component={BankAccounts} />
              <PrivateRoute path="/transactions" component={Transactions} />
              <PrivateRoute path="/send-money" component={SendMoney} />
              <PrivateRoute path="/bill-payment" component={BillPayment}/>
              <PrivateRoute path="/" component={home} exact={true}/>
            </div>
            <Route component={Redirected} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routers;
