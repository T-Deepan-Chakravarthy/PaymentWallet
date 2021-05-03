import React from "react";
import User from "./User"

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
                <button type="button" onClick={()=>this.logout()}>Yes</button>
                <button type="button" >No</button>
            </div>
        )
    }
}

export default Logout;