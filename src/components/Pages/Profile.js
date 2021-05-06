import User from '../../localstorage/User';

const Profile = props =>{
    return(
        <div>
            {User.getCustomer().name}<br/>
            {User.getCustomer().mobileNo}<br/>
            {User.getCustomer().wallet.balance}
            <button type="button" onClick={
                ()=>{props.history.push('/upate-profile')}
            }>Update Profile</button>
            <button type="button" onClick={
                ()=>{
                    props.history.push('/set-password')
                }
            }>Set Password</button>
        </div>
    )
}

export default Profile;