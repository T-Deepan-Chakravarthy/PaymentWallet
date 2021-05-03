const User = {
  customer: {
    name: null,
    mobileNo: null,
    wallet: {
      walletId: 0,
      balance: 0,
    },
  },
  isLoggedIn: false,
  login(customer) {
    console.log("login");
    this.customer.name = customer.name;
    this.customer.mobileNo = customer.mobileNo;
    this.customer.wallet = { ...customer.walletDTO };
    this.isLoggedIn = true;
    console.log(User.getLoggedIn());
  },
  logout() {
    this.isLoggedIn = false;
    console.log(this.customer);
    console.log("logout");
    this.customer = {
      name: null,
      mobileNo: null,
      wallet: {
        walletId: 0,
        balance: 0,
      },
    }
    
  },
  getLoggedIn() {
    return this.isLoggedIn;
  },
  getCustomer() {
    return this.customer;
  },
};

export default User;
