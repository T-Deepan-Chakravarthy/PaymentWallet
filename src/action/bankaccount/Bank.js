import axios from "../../axios/Axios"
import User from "../../components/pages/wallet/User"

const _addBankAccount = bankaccount => ({
    type:'ADD_ACCOUNT',
    bankaccount
});

export const addbankaccount = bankaccount => {
    return (dispatch) =>{
        console.log("Addbankaccountaction");
        console.log(bankaccount);
        return axios.post("http://localhost:9191/api/pwa/account/add",bankaccount).then(result=>{
            console.log(result.data);    
            dispatch(_addBankAccount(result.data))
            }
        );  
          
    }
}


