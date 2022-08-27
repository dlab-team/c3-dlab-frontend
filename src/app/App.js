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
import ProfileFormContainer from "../components/profile/ProfileFormContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileAccordion from "../components/profile/ProfileAccordion";
import EjemploForm from "../components/profile/EjemploForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup-btn" element={<SignUpBtn />}></Route>
        <Route path="/signup-form" element={<SignUpForm />}></Route>
        <Route path="/profile-form" element={<ProfileForm />}></Route>
        <Route path="/ejemplo-form" element={<EjemploForm />}></Route>
        <Route
          path="/profile-form-container"
          element={<ProfileFormContainer />}
        ></Route>
        <Route path="/profileType" element={<ProfileType />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
