import "./App.css";
import Home from "../pages/home/home";
import Navbar from "../components/navbar";
import About from "../pages/about";
import Blog from "../pages/blog";
import Login from "../pages/login";
import Profile from "../pages/profile";
import ProfileType from "../pages/profileType";
import SignUpForm from "../pages/signUpForm";
import SignUpBtn from "../components/home/signUpBtn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup-btn" element={<SignUpBtn />}></Route>
        <Route path="/signup-form" element={<SignUpForm />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profileType" element={<ProfileType />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
