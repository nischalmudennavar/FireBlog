import "./app.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage/Login";
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Navbar from "./Components/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className="app">
      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />}
          />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
