import axios from "../../axios/Axios"

const _getTransactionList = list =>({
    type : "GET_TRANSACTION_LIST",
    list
})

export const getTransactionList = ({walletId}={}) =>{
    return (dispatch) => {
        return axios.get(`http://localhost:9191/api/pwa/transaction/get-wallet-transaction/${walletId}`).then(result=>{
            console.log(result);
            let list = []
            result.data.forEach(element => {
                list.push(element);
            });
            dispatch(_getTransactionList(list));
        }).catch(error=>{
            console.log(error.response.data);
        })
    }
}
