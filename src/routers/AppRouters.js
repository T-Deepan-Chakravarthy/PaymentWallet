import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCustomerMap from '../components/pages/wallet/CreateAccountMap'


const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
                <Route path="/add" component={AddCustomerMap} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;