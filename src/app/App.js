import "./App.css";
import Home from "../pages/home/home";
import About from "../pages/about";
import Blog from "../pages/blog";
import Login from "../pages/login";
import ProfileType from "../pages/profileType";
import SignUpForm from "../pages/signUpForm";
import SignUpBtn from "../components/home/signUpBtn";
import Dashboard from "../pages/profile/Dashboard";
import ProfileForm from "../components/profile/ProfileForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../contexts/userContext";
import { useState, useEffect } from 'react';
import axios from "axios";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  const [userData, setUserData] = useState({})

  useEffect( () => {
    const getUserData = async () => {
      if (Object.keys(userData).length === 0 || !userData ) {
        const resp = await axios.get('http://localhost:8080/api/1/users/currentuser/',
          {withCredentials: true})

        setUserData(resp.data.currentUser)
      }
    }
    getUserData()
  }, [])

  return (
    <BrowserRouter>
      <UserContext.Provider value={{userData, setUserData }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup-btn" element={<SignUpBtn />}></Route>
        <Route path="/signup-form" element={<SignUpForm />}></Route>
        <Route path="/profile-form" element={<ProfileForm />}></Route>
        <Route path="/profileType" element={<ProfileType />}></Route>
        <Route exact path="/dashboard" element={<ProtectedRoute/>}>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
