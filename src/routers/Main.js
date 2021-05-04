import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import BankAccounts from "../components/pages/bankaccount/ViewBankAccount";
import Transactions from "../components/pages/transaction/ViewTransaction";
import Navbar from "../components/layout/NavBar";
import home from "../components/pages/wallet/Home";
import SendMoney from '../components/pages/wallet/SendMoney';
import AddBanKAccount from "../components/pages/bankaccount/AddBankAccount";

const Main = (customer) => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <PrivateRoute path="/bank-accounts" component={BankAccounts} />
      <PrivateRoute path="/transactions" component={Transactions} />
      <PrivateRoute path="/home/send-money" component={SendMoney} />
      <PrivateRoute path="/AddBanKAccount"  component={AddBanKAccount}></PrivateRoute>
      <PrivateRoute Path="/home" component={home} exact={true} />
      <Route component={(<div>404 Not found</div>)}/>
    </Switch>
  </BrowserRouter>
);

export default Main;
