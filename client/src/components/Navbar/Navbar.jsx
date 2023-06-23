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
    // <>
    //     <nav className='navbar'>
    //     <a href="" className='navbar-title'>Personal Blog</a>
    //     <ul>
    //         <li>
    //             <Link to="/">

    //               <p className={`${currentTab === "Home" ? "current" : ""}`}
    //               onClick={() => setCurrentTab("Home")}
    //               >All Blogs</p>
    //             </Link>
    //         </li>
    //         <li>
    //             <Link to="/create">
    //             <p className={`${currentTab === "Create" ? "current" : ""}`}
    //             onClick={() => setCurrentTab("Create")}
    //             >Add Blog</p>
    //             </Link>
    //         </li>
    //     </ul>
    // </nav>
    // </>
    <div className='navbar'>
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
