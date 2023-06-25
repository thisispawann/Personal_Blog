import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import "../Navbar/navbar.css";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState('Home');

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/'){
      setCurrentTab("Home")
    }else if (location.pathname === '/create'){
      setCurrentTab("Create");
    }
  }, [location]);

  return (
    <div className='navbar bg-secondary'>
      <p className='logo'>Personal Blog</p>
      <div className='navbar-right'>
        <Link to="/">
        <p className={`${currentTab === "Home" ? "active" : ""}`}
               onClick={() => setCurrentTab("Home")}>All Blogs</p>
        </Link>
        <Link to="/create">
               <p className={`${currentTab === "Create" ? "active" : ""}`}
                onClick={() => setCurrentTab("Create")}
                >Add Blog</p>
               </Link>
      </div>
    </div>
  )
}

export default Navbar;
