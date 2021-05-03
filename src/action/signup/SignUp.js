import axios from "../../axios/Axios"
import User from "../../components/pages/wallet/User";

const _createAccount = customer => ({
    type : 'CREATE_ACCOUNT',
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

const _login = customer => ({
    type : 'LOGIN',
    customer
})

export const login = customer => {
    return (dispatch) => {
        console.log("loginAction");
        return axios.put("http://localhost:9191/api/pwa/user/validate",customer).then(result=>{
            console.log(result.data);
            User.login(result.data);
            dispatch(_login(result.data))
        }).catch(error=>{
            alert(error.response.data);
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
            dispatch(_getList(result.data));
        })
    }
}

const _fundTransfer = customer =>({
    type : "FUND_TRANSFER",
    customer
})

export const fundTransfer = (source,target,amount) =>{
    return (dispatch) => {
        return axios.put(`http://localhost:9191/api/pwa/wallet/fund-transfer/${source}/${target}/${amount}`).then(result=>{
            dispatch(_fundTransfer(result.data));
        }).catch(error=>{
            console.log(error.response);
        })
    }
}