import {BrowserRouter,Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import BankAccounts from '../components/pages/bankaccount/ViewBankAccount';
import Transactions from '../components/pages/transaction/ViewTransaction';
import Navbar from '../components/layout/NavBar';
import home from '../components/pages/wallet/Home';

const Main = (customer) => (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <PrivateRoute path='/home' component={home}/>
            <PrivateRoute path='/bank-accounts' component={BankAccounts} />
            <PrivateRoute Path='/transactions' component={Transactions} />
        </Switch>
    </BrowserRouter>    
)

export default Main;