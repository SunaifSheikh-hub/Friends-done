import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import {  Routes, Route, BrowserRouter } from "react-router-dom";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;