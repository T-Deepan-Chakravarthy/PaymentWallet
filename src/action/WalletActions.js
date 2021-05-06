import axios from "axios";
import User from "../localstorage/User";

const _createAccount = ({customer}) => ({
    type : "CREATE_ACCOUNT",
    customer
});

export const createAccount = customer => {
    return (dispatch) =>{
        console.log("createAccountAction");
        console.log(customer);
        return axios.post("http://localhost:9191/api/pwa/wallet/create-account",customer).then(result=>{
            console.log(result.data);
            User.login(result.data);    
            dispatch(_createAccount(result.data))
            }
        );    
    }
}

const _login = details => ({
    type : "LOGIN",
    details,
})

export const login = customer => {
    return (dispatch) => {
        console.log("loginAction");
        return axios.put("http://localhost:9191/api/pwa/user/validate",customer).then(result=>{
            console.log(result.data);
            User.login(result.data);
            let details = result.data;
            console.log(details);
            dispatch(_login(details));
        })
    }
}

const _getList = list =>({
    type : "GET_LIST",
    list
})

export const getList = () =>{
    return (dispatch) => {
        return axios.get("http://localhost:9191/api/pwa/wallet/get-list").then(result=>{
            let list = []
            result.data.forEach(element => {
                list.push(element);
            });
            dispatch(_getList(list));
        })
    }
}

const _fundTransfer = transaction =>({
    type : "FUND_TRANSFER",
    transaction
})

export const fundTransfer = (source,target,{amount}) =>{
    return (dispatch) => {
        return axios.put(`http://localhost:9191/api/pwa/wallet/fund-transfer/${source}/${target}/${amount}`).then(result=>{
            let transaction = result.data;    
        dispatch(_fundTransfer(transaction));
        }).catch(error=>{
            console.log(error.response);
        })
    }
}


const _addMoney = transaction => ({
    type : 'ADD_MONEY',
    transaction
});

export const addMoney = (account,{walletId},{amount}) =>{
    return (dispatch) => {
        console.log(account);
        return axios.put(`http://localhost:9191/api/pwa/wallet/add-money/${walletId}/${amount}`,account).then(result=>{
            let transaction = result.data;
            console.log(transaction);
            dispatch(_addMoney(transaction));
        }).catch(error=>{
            console.log(error.response.data);
        })
    }
}

const _update = customer =>({
    type : "UPDATE",
    customer
})

export const update = customer =>{
    console.log(customer);
    return (dispatch) =>{
        console.log(customer);
        return axios.put("http://localhost:9191/api/pwa/wallet/update-account",customer).then(result=>{
            User.login(result.data);
            let user = result.data;
            dispatch(_update(user));
        }).catch(error=>{
            console.log(error.response.data);
        })
    }
}


const _deposit = transaction =>({
    type : 'DEPOSIT',
    transaction
})

export const deposit = ({walletId},{amount}) =>{
    return (dispatch) =>{
        return axios.put(`http://localhost:9191/api/pwa/wallet/deposit-amount/${walletId}/${amount}`).then(result=>{
            let transaction = result.data;
            console.log(transaction);
            dispatch(_deposit(transaction));
        }).catch(error=>{
            console.log(error.response.data);
        })
    }
}

const _withdraw = transaction =>({
    type : 'WITHDRAW',
    transaction
})

export const withdraw = ({walletId},{amount}) =>{
    console.log(walletId+" "+amount);
    return (dispatch) =>{
        return axios.put(`http://localhost:9191/api/pwa/wallet/withdraw-amount/${walletId}/${amount}`).then(result=>{
            console.log(result.data);
            let transaction = result.data;
            console.log(transaction);
            dispatch(_withdraw(transaction));
        }).catch(error=>{
            console.log(error.response.data);
        })
    }
}
