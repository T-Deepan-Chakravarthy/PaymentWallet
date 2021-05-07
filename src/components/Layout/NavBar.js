import { NavLink } from "react-router-dom";
import User from '../../localstorage/User';

const Navbar = props => {
  return (
    <div>
    <div>
<div class="ui hidden divider">
</div>
<div>
<div class="ui blue inverted menu">
<div class="ui attached tabular menu">
  <div class="ui inverted pointing secondary menu"></div>
    <a class="item"><NavLink to="/" exact={true}>HOME</NavLink></a>
    <a class="item"><NavLink to="/bank-accounts">BANK ACCOUNTS</NavLink></a>
    <a class="item"><NavLink to="/transactions">TRANSACTIONS</NavLink></a>
    <a class="item"><NavLink to="/profile">PROFILE</NavLink></a>
    <a class="right menu item"><NavLink to="/login" onClick={()=>User.logout()}>Logout</NavLink></a>
    </div>
    <div class="ui bottom attached segment tab"><NavLink to="/" exact={true}>HOME</NavLink></div>
    <div class="ui bottom attached segment tab"><NavLink to="/bank-accounts">BANK ACCOUNTS</NavLink> </div>
    <div class="ui bottom attached segment tab"><NavLink to="/transactions">TRANSACTIONS</NavLink> </div>
    <div class="ui bottom attached segment tab"><NavLink to="/profile">PROFILE</NavLink> </div>
    <div class="ui bottom attached segment tab"><NavLink to="/login" onClick={()=>User.logout()}>LOGOUT</NavLink> </div>
</div>
</div>
   </div>
   <div>
  <img class="ui fluid image" src="https://pkuniversity.edu.in/wp-content/uploads/2019/05/payment.png"/>
  </div>
   <div class="ui hidden divider"></div>
   </div>
  );
};

export default Navbar;
