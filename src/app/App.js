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
import ShowTheCode from "../components/profile/ShowTheCode";
import ShowTheCodeAccepted from "../components/profile/ShowTheCodeAccepted";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/showthecode/invitations" element={<ShowTheCode />}></Route>
        <Route path="/showthecode/accepted" element={<ShowTheCodeAccepted />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup-btn" element={<SignUpBtn />}></Route>
        <Route path="/signup-form" element={<SignUpForm />}></Route>
        <Route path="/profile-form" element={<ProfileForm />}></Route>
        <Route path="/profileType" element={<ProfileType />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
