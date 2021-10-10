import React from "react";
import './App.css'
import Home from './components/home'
import Signin from "./components/signin";
import Signup from "./components/signup"


function App(){
  return(
    <div>
    <div className="fornt">
      <h1>hi</h1>
      <Home/>
      <Signin/>
      <Signup/>
    </div>
    </div>
  )
}

export default App;