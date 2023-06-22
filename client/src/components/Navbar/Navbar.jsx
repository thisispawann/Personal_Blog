import React from 'react'
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
        <a href="" className='navbar-title'>Personal Blog</a>
        <ul>
            <li>
                <a href="">Blogs</a>
            </li>
            <li>
                <a href="">Add Blog</a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;
