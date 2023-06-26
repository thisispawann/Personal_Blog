import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Personal Blog:{' '}
        <Link className='text-dark' style={{ textDecoration: 'none' }} href='/'>
          Made with <span style={{color:'#E11D48'}}>❤ </span>&amp;&nbsp; Node/React JS
        </Link>
      </div>
    </div>
  )
}

export default Footer
