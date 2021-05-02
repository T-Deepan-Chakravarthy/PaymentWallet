import {Link} from 'react-router-dom';

const BankAccounts = () =>{
    return(
        <div>
            List of BankAccounts
        <Link to="/AddBanKAccount">
        <button className="btn btn-primary btn-block" type="button">AddBanKAccount</button>
        </Link>
        </div>
    )
}

export default BankAccounts;