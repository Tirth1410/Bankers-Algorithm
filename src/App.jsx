import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Router, Routes, useNavigate} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import InputComp from "./components/InputComp.jsx";
import FooterBar from "./components/Footerbar.jsx";

function App() {
  const navigate = useNavigate();

    useEffect(() => {
        navigate("/home")
    }, []);
    // document.body.style.overflowY = "hidden";
  return (
      <div className="">
          <Navbar/>
          <Routes>
              <Route path="/home" element={
                  <Home/>
              }/>
              <Route path="/calculate" element={
                  <InputComp/>
              }/>
          </Routes>
          <FooterBar/>
      </div>
  )
}

export default App
