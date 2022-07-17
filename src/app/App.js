import React from "react";
import "./App.css";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "../pages/home";
import Footer from "../components/footer/footer";
import Profile from "../pages/profile"
import Navbar from "../components/navbar/navbar"
import Register from "../pages/register";


function App() {
  return (
    <div class="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>   
  );
}

export default App;
