import "./App.css";
import Home from "../pages/home";
import VistaRegister from "../pages/vistaRegister";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<VistaRegister />} />
      </Routes>     
    </div>
  );
}

export default App;
