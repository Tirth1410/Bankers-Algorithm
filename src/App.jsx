import {useEffect, useState} from 'react'
import {BrowserRouter, Route, Router, Routes, useNavigate} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

    useEffect(() => {
        navigate("/home")
    }, []);
  return (
      <Routes>
          <Route path="/home" element={
              <Home/>
          }/>
      </Routes>
  )
}

export default App
