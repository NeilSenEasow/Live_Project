import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Test from "./components/Test/Test";
import Results from "./components/Results/Results";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Landing from "./components/Landing/Landing";
import { MyContextProvider } from './context/MyContext';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/questions");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setData(data.teammates);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <MyContextProvider>
      <BrowserRouter>
        <div>
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/sign-in" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
