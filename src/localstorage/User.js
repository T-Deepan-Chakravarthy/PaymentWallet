const User = {
  customer: {
    name: null,
    mobileNo: null,
    wallet: {
      walletId: 0,
      balance: 0
    },
  },
  target : "",
  bank : {
    accountNo : 0,
    ifscCode : "",
    balance : 0,
    bankName : "",
    wallet : {
      walletId : 0,
      balance : 0
    }
  },
  
    billpayment:{
      billId:0,
      amount:"",
      billType:"",
      paymentDate:"",
      wallet:{
        walletId : 0,
        balance : 0
      }
  },
  isLoggedIn: false,
  login(customer) {
    console.log("login");
    console.log(customer);
    this.customer.name = customer.name;
    this.customer.mobileNo = customer.mobileNo;
    this.customer.wallet = { ...customer.walletDto };
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
  setTarget(mobileNo){
    this.target = mobileNo;
  },
  isBank:false,
  setBank(bank){
    this.bank.accountNo = bank.accountNo;
    this.bank.balance = bank.balance;
    this.bank.bankName = bank.bankName;
    this.bank.ifscCode = bank.ifscCode;
    this.bank.wallet = {...bank.walletDto};
    this.isBank = true;
  },
  getBank(){
    return this.bank;
  },
  getBankCreated(){
    return this.isBank;
  },
  isBill:false,
  setBill(billpayment){
    this.billpayment.billId=billpayment.billId;
    this.billpayment.amount=billpayment.amount;
    this.billpayment.billType=billpayment.billType;
    this.billpayment.paymentDate=billpayment.paymentDate;
    this.isBill = true;
  },
  getBill(){
    return this.billpayment;
  },
  getBillCreated(){
    return this.isBill;
  }
};

export default User;
