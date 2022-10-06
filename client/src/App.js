import React from "react";
import {Routes ,Route } from 'react-router-dom';
import Home from './components/home/Home'
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";

function App() {
  return (
   
      <Routes>
      
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/profile" element={<Profile/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/register" element={<Register/>}></Route>

      </Routes>
    
    )
    }
 export default App; 
  