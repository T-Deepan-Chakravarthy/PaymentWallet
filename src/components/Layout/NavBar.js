import { NavLink } from "react-router-dom";
import User from "../../localstorage/User";

const Navbar = props => {
  return (
    <div className="header_nav">
      <NavLink to="/" exact={true} activeclassName="activeNav">HOME</NavLink>
      <NavLink to="/bank-accounts" activeClassName="activeNav">BANK ACCOUNTS</NavLink>
      <NavLink to="/transactions" activeClassName="activeNav">TRANSACTIONS</NavLink>
      <NavLink to="/profile" activeClassName="activeNav">PROFILE</NavLink>
      <NavLink to="/login" onClick={()=>User.logout()} activeClassName="activeNav">Logout</NavLink>
    </div>
  );
};

export default Navbar;
