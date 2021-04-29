import axios from 'axios';

const  CUSTOMER_API_BASE_URL = "http://localhost:9191/api/pwa/wallet";

class CustomerService {
createAccount(customer){
    return axios.post(CUSTOMER_API_BASE_URL, customer);
}
}
export default new CustomerService()
