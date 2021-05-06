import axios from "axios";




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

const _addBillPayment = billpayment => ({
    type:'ADD_BILL',
    billpayment
});

export const addbillpayment = billpayment => {
    return (dispatch) =>{
        console.log("Addbillpaymentaction");
        console.log(billpayment);
        return axios.post("http://localhost:9191/api/pwa/bill-payment/add-bill",billpayment).then(result=>{
            console.log(result.data);    
            dispatch(_addBillPayment(result.data))
            }
        );  
}   
}   


const _deleteTransaction = transaction => ({
    type : 'DELETE_TRANSACTION',
    transaction
})

export const deleteTransaction = ({transactionId}) =>{
    return (dispatch) =>{
        return axios.delete(`http://localhost:9191/api/pwa/transaction/remove/${transactionId}`).then(result=>{
            let transaction = result.data;
            dispatch(_deleteTransaction);
        }).catch(error=>{
            console.log(error);
        })
    }
}