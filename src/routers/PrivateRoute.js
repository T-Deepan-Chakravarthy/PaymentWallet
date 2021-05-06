import {Route} from 'react-router-dom';
import User from '../localstorage/User';
import {Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component,...rest}) => {
    return (
        <Route {...rest} render={
            props => (
                User.getLoggedIn() ? (<Component {...props} />) : <Redirect to="/login" />
            )
        }/>
    )
}

export default PrivateRoute;
