import React from "react";
import {Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/screens/Home.jsx";
import Create from "./components/screens/Create.jsx";
import Update from "./components/screens/Update";
import View from "./components/screens/View";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/screens/Footer";

function App() {
  return (
    <div className="App">
       <Navbar/>
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
