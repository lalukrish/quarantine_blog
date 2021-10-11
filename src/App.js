import React from "react";
import './App.css'
import { BrowserRouter,Route } from "react-router-dom";
import Home from './components/views/home'
import Signin from "./components/views/signin";
import Signup from "./components/views/signup"


function App(){
  return(
    <BrowserRouter>
    
    
    <Home/>
      <Signin/>
      <Signup/>
  
    </BrowserRouter>
   
   
   
  )
}

export default App;