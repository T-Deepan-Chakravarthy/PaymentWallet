import User from '../../localstorage/User';

const ViewAccount = () =>{
    return(
        <div>
            <div class="ui hidden divider"></div>
            <div class="ui centered card">
<div class="image">
<img src="https://bbcincorp.com/wp-content/uploads/2020/08/hk-bank-account.jpg"/> 
</div>
<div class="content">
<a class="header"><br/> {User.getBank().bankName}</a>
<div class="meta"></div>
<span class="date"></span>
</div>
<div class="description">
User Bank Account No : {User.getBank().accountNo}
</div> 
<div class="description">
User Ifsc Code : {User.getBank().ifscCode}
</div> 
<div class="description">
User Balance : {User.getBank().balance}
</div>       
</div>
        </div>
    )
}

export default ViewAccount;