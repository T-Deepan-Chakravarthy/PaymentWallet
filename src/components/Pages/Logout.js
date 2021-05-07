import React from "react";
import User from "../../localstorage/User"
import Button from '@material-ui/core/Button';

class Logout extends React.Component{

    constructor(props){
        super(props);
    }

    logout = () =>{
        User.logout();
        this.props.history.push('/login');
        console.log("logout");
    }

    render(){
        return(
            <div>
                Do you want logout?
                <Button type="button"  variant="contained" color="primary" onClick={()=>this.logout()}>Yes</Button>
                <Button variant="contained" color="secondary" type="button" >No</Button>
            </div>
        )
    }
}

export default Logout;