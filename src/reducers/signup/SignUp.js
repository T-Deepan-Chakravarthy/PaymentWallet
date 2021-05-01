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
        default:
            return state;
    }
}

export default Reducer;