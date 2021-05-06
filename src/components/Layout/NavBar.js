import { NavLink } from "react-router-dom";
import User from "../../localstorage/User";

const Navbar = props => {
  return (
    <div>
      <NavLink to="/" exact={true} className="">HOME</NavLink>
      <NavLink to="/bank-accounts">BANK ACCOUNTS</NavLink>
      <NavLink to="/transactions">TRANSACTIONS</NavLink>
      <NavLink to="/profile">PROFILE</NavLink>
      <NavLink to="/login" onClick={()=>User.logout()}>Logout</NavLink>
    </div>
  );
};

export default Navbar;
