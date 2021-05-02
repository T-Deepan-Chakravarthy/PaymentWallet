import {Route} from 'react-router-dom';
import User from '../components/pages/wallet/User';
import {Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component,...rest}) => {
    console.log(User.getLoggedIn());
    return (
        <Route {...rest} render={
            props => (
                User.getLoggedIn() ? (<Component {...props} />) : <Redirect to="/login" />
            )
        }/>
    )
}


export default PrivateRoute;