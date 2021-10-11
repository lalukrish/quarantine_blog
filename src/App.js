import React from "react";
import './App.css'
import { BrowserRouter,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './components/views/home'
import Signin from "./components/views/signin";
import Signup from "./components/views/signup"


function App(){

  return(
    <BrowserRouter>
    <NavBar/>
    <Route path="/">
      <Home/>
    </Route>
    <Route path="/signin">
      <Signin/>
      </Route>
      <Route path="/signup">
      <Signup/>
      </Route>
    <NavBar/>  
    </BrowserRouter>
   
  )
}

export default App;