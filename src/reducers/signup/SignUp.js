const customersReducerDefaultState = [];

export default (state = customersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [
                ...state,
                action.customer
            ];
        default:
            return state;
        }
    };