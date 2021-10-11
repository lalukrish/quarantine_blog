import React from "react";
import { Link } from "react-router-dom";

const NavBar =()=>{
    return(
    <nav>
        <div className="nav_views">
            <Link to="/" className="brand-logo">Home</Link>
            <ul id="nav_mobile" className="right">
                <Link to="/signup">Signup</Link>
                <Link to ="/signin">Signin</Link>

            </ul>
        </div>
  
    </nav>

)
}

    export default NavBar;