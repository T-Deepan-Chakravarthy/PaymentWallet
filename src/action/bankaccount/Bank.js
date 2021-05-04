import axios from "../../axios/Axios"


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

const _getBankList = list =>({
    type : "GET_BANK_LIST",
    list
})

export const getBankList = ({walletId}={}) =>{
    return (dispatch) => {
        console.log(typeof walletId);
        return axios.get(`http://localhost:9191/api/pwa/account/viewAll/${walletId}`).then(result=>{
            console.log(result);
            let list = []
            result.data.forEach(element => {
                list.push(element);
            });
            dispatch(_getBankList(list));
        }).catch(error=>{
            console.log(error.response.data);
        })
    }
}