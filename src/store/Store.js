import { createStore, applyMiddleware } from "redux";
import customer from '../reducers/signup/SignUp';
import thunk from 'redux-thunk';
export default () => {
    alert("called");
    return createStore(customer, applyMiddleware(thunk));
};