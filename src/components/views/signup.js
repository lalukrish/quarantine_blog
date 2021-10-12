import React from "react";

const Signup =()=>{
  return(
    
    <div className="mycard">
    <div className="card auth_card">
    <div class="coloumn">

        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate"></input>
          <label for="icon_prefix"> Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input id="icon_telephone" type="tel" class="validate"></input>
          <label for="icon_telephone">Email</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">password</i>
          <input id="icon_telephone" type="tel" class="validate"></input>
          <label for="icon_telephone">Password</label>
        </div>
      </div>
      </div>
      </div>
  )
}
 export default Signup;