import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from './Pages/CreatePost';
import Home from './Pages/Home';
import Login from './Pages/Login';
import "./App.css";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase/firebase-config";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"

    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {isAuth && (
          <Link to="/CreatePost">CreatePost</Link>
        )}
        {!isAuth ? (
          <Link to="/Login">Login</Link>
        ) : (
          <button className='nav' onClick={signUserOut}>LogOut</button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}></Route>
        <Route path="/CreatePost" element={<CreatePost isAuth={isAuth}/>}></Route>
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  )
}

export default App