const Reducer = (state = [],action) => {
    switch(action.type){
        case "CREATE_ACCOUNT":
            return [
                ...state,
                action.customer
            ]
        case "LOGIN":
            return [
                ...state,
                action.customer
            ]
        case "GET_LIST":
            console.log(action.list);
            return action.list;

        case "ADD_ACCOUNT":
            return [
                ...state,
                action.bankaccount
            ]
        
        case "VIEW_BANK_LIST":
        console.log(action.getBankList);
        return action.getBankList;

        case "FUND_TRANSFER":
            return action.customer;
        
        default:
            return state;
    }
}

export default Reducer;