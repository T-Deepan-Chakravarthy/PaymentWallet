import axios from '../../axios/Axios'

const _createAccount = customer => ({
    type : 'CREATE_ACCOUNT',
    customer
});

export const createAccount = customer => {
    return (dispatch) =>{
        console.log("createAccountAction");
        return axios.post("http://localhost:9191/api/pwa/wallet/create-account",customer).then(result=>{
            dispatch(_createAccount(result.data))
            }
        );    
    }
}

