import { createStore, applyMiddleware } from "redux";
import customer from '../reducers/signup/SignUp';
import thunk from 'redux-thunk';
export default () => {
    alert("called");
    try
    {
    return createStore(customer, applyMiddleware(thunk));
    }
    catch(e)
    {
        alert(e.message);
    }
};