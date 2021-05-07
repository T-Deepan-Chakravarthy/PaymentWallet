import User from '../../localstorage/User';
import Button from '@material-ui/core/Button';

const Profile = props =>{
    return(
        <div class="ui centered card">
             <div class="image">
             <img src="https://image.pngaaa.com/345/1582345-middle.png"/> 
             </div>
             <div class="content">
    <a class="header">{User.getCustomer().name}<br/></a>
    <div class="meta"></div>
      <span class="date">{User.getCustomer().mobileNo}</span>
    </div>
    <div class="description">
     User Balance : {User.getCustomer().wallet.balance}
    </div> 
    <div class="description">
      Have a good Pay with our Wallet
    </div> 
    <div class="extra content">
    <a>
      <i class="user icon"></i>
       Fetch Users for Send or Recieve
    </a>
  </div>       
            <div class="ui divider"></div>
            <Button variant="contained" color="primary" type="button" onClick={
                ()=>{props.history.push('/upate-profile')}
            }>Update Profile</Button>
              <div class="ui divider"></div>
            <Button variant="contained" color="primary" type="button" onClick={
                ()=>{
                    props.history.push('/set-password')
                }
            }>Set Password</Button>
              <div class="ui divider"></div>
        </div>
    )
}

export default Profile;



