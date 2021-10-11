import React from "react";
import { Link } from "react-router-dom";

const NavBar =()=>{
    return(
    <nav>
       
             
                <Link to="/">Home</Link>
                <div className="center">
                    <ul>
                <Link to="/signup" >Signup</Link>
                <Link to ="/signin" >Signin</Link>
                </ul>
               </div>
            
       
  
    </nav>

)
}

    export default NavBar;