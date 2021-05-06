const Reducer = (state = [],action) => {
    switch(action.type){
        case 'CREATE_ACCOUNT':
            return action.customer;
        case 'LOGIN':
            return action.details;
        case 'GET_LIST':
            return action.list;
        case 'GET_BANK_LIST':
            return action.list;
        case 'GET_TRANSACTION_LIST':
            return action.list;
        case 'FUND_TRANSFER':
            return {transaction:{...action.transaction}};
        case "ADD_BILL":
         return [
            ...state,
            action.billpayment
         ]  
        case "ADD_ACCOUNT":
            return [
                ...state,
                action.bankaccount
            ]
        case 'ADD_MONEY':
            return {transaction:{...action.transaction}};
        case 'UPDATE':
            return action.customer;
        case 'DEPOSIT':
            return {transaction:{...action.transaction}};
        case 'WITHDRAW':
            return {transaction:{...action.transaction}};
        case 'DELETE':
            return state.filter(bank=>bank!==action.bank); 
        case 'DELETE_TRANSACTION':
            return state.filter(transaction=>transaction!==action.transaction); 
        default:
            return (state);
    }
}

export default Reducer;