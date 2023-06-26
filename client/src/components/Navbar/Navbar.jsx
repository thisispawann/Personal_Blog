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
      <Link to="/">
        <p className='logo'>Personal Blog</p>
      </Link>
      <div className='navbar-right'>
        <Link to="/">
        <p className={`${currentTab === "Home" ? "active" : ""}`}
               onClick={() => setCurrentTab("Home")}>All Articles</p>
        </Link>
        <Link to="/create">
               <p className={`${currentTab === "Create" ? "active" : ""}`}
                onClick={() => setCurrentTab("Create")}
                >New Article</p>
               </Link>
      </div>
    </div>
  )
}

export default Navbar;
