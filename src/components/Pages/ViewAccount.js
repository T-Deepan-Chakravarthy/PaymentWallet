import User from '../../localstorage/User';

const ViewAccount = () =>{
    return(
        <div>
            {User.getBank().bankName}<br/>
            {User.getBank().accountNo}<br/>
            {User.getBank().ifscCode}<br/>
            {User.getBank().balance}
        </div>
    )
}

export default ViewAccount;