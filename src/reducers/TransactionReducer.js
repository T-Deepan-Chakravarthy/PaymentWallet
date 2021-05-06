const TransactionReducer = (state = [],action) => {
    switch(action.type){
        case "FUND_TRANSFER":
            console.log(action);
            return action.transaction;
        default:
            return state;
    }
}

export default TransactionReducer;