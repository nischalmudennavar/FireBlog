import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage/Login";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Navbar from "./Components/Navbar";
import "./app-style.css";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <div className="app">
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          {/* <Navigate to="/" /> */}
          <Route path="/fireblog" element={<Home isAuth={isAuth} />} />
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />}
          />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
