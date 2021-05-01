import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/bank-accounts">Bank</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
    </div>
  );
};

export default Navbar;
