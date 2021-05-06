import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducer from "../reducers/Reducer";

const store = () => {
    return createStore(Reducer, applyMiddleware(thunk));
};

export default store;