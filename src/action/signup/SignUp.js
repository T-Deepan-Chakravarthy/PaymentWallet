import axios from '../../axios/Axios';

const _addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER',
    customer
});

export const addCustomer = (customerData = {
    name: '',
    password: '',
    mobileNo:''
  
}) => {
    return (dispatch) => {
        console.log("in add cus action cusdata"+customerData.mobileNo)
        const customer = {
            name: customerData.name,
            password:customerData.password,
            mobileNo:customerData.mobileNo
        };
        console.log("cus dispatch"+customer.name)
        return axios.post('customer', customer).then(result => {
            dispatch(_addCustomer(result.data));
        });
    };
};



