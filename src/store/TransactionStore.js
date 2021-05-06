import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import TransactionReducer from "./TransactionReducer";

const transactionstore = () => {
    return createStore(TransactionReducer, applyMiddleware(thunk));
};

export default transactionstore;