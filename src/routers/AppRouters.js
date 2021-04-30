import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from "../components/pages/wallet/CreateAccount";
import Login from "../components/pages/login/Login";

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/" component={Login}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;