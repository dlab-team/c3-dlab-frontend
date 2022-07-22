import "./App.css";
import Home from "../pages/home/home";
import Navbar from "../components/navbar";
import About from "../pages/about";
import Blog from "../pages/blog";
import Login from "../pages/login";
import Profile from "../pages/profile";
import SignUp from "../pages/sign up";
import AllFaqs from "../components/home/allFaqs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-faqs" element={<AllFaqs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
