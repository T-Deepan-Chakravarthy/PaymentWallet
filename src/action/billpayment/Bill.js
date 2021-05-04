import axios from '../../axios/Axios'

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