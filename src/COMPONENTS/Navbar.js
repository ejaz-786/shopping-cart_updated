import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = () => {
  return (
    <>
   <div className='nav-bar'>
      <div className='logo'>
        <h2 style={{fontStyle:"italic",fontFamily: 'Kaushan Script' ,color:"red",fontSize:"45px"}}>E-mart</h2>
      </div>

      <div id='search-bar'><input type='text' id='inp-nav'/><button id='bt-search'>search</button></div>

      <div className='nav-links'>
      
        <div className='link-div'><Link to='/' className='link' >Home</Link></div>
        <div className='link-div'><Link to='/About' className='link' >About Us</Link></div>
        <div className='link-div'><Link to='/Contact' className='link' >Contact Us</Link></div>
        <div className='link-div'><Link to='/Cart' className='link' >Cart<ShoppingCartIcon/></Link></div>
    
      </div>
   </div>
   </>
  )
}

export default Navbar
