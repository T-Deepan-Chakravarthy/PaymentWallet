const User = {
    name : null,
    mobileNo : null,
    wallet:{
        walletId : 0,
        balance : 0
    },
    isLoggedIn : false,
    login(customer){
        console.log("login");
        this.name = customer.name;
        this.mobileNo = customer.mobileNo;
        this.wallet = {...customer.walletDTO};
        // this.walletId = customer.walletDTO.walletId;
        // this.balance = customer.walletDTO.balance;
        this.isLoggedIn = true;
    },
    logout(){
        this.name = null;
        this.mobileNo = null;
        this.walletId = 0;
        this.balance = 0;
        this.isLoggedIn = false;
    },
    getLoggedIn(){
        return this.isLoggedIn; 
    }
}

export default User;