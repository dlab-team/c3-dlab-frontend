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
import PruebaPut from "../components/profile/PruebaPut";
import DataProvider from "../context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardStcInvitations from "../pages/profile/DashboardStcInvitations";
import DashboardStcAccepted from "../pages/profile/DashboardStcAccepted";


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard/showthecode/accepted" element={<DashboardStcAccepted/>}></Route>
        <Route path="/dashboard/showthecode/invitations" element={<DashboardStcInvitations/>}></Route>
        <Route path="/dashboard/showthecode" element={<ShowTheCode/>}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup-btn" element={<SignUpBtn />}></Route>
        <Route path="/signup-form" element={<SignUpForm />}></Route>
        <Route path="/profile-form" element={<ProfileForm />}></Route>
        <Route path="/profileType" element={<ProfileType />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/prueba" element={<PruebaPut />}></Route>
      </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
