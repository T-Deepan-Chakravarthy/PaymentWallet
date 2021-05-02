import SignUp from "../components/pages/wallet/CreateAccount";
import Login from "../components/pages/login/Login";
import Main from "../routers/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import PrivateRoute from '../routers/PrivateRoute';
import Redirected from '../components/pages/Redirected';

const AppRouters = () =>  {
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Main}  exact={true} />
            <Route component={Redirected}/>
          </Switch>
        </BrowserRouter>
    );
}

export default AppRouters;