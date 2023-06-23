import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar/Navbar";
//import Home from "./components/screens/Home";
import Home from "./components/screens/Home.jsx";
import Create from "./components/screens/Create.jsx";
import Update from "./components/screens/Update";
import View from "./components/screens/View";
import "./App.css";

function App() {
  return (
    // <div className="">
    //   <Navbar/>
    //   <Home/>
    // </div>
    <div className="App">
      <ToastContainer/>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
