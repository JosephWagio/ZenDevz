import React, { useState } from 'react'
import { HiOutlineMenu} from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

import Logo from '../../Assets/ZEN DEVZ.png';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClose = () => {
    setToggleMenu((prev) => !prev)
  }

  return (
    <div className='navbar'>
      <div className="navbar-links_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-links_container">
        <ul className='navbar-links'>
          <li className='p__opensans'><Link to="/">Home</Link></li>
          <li className='p__opensans'><a href="#ourservices">Our services</a></li>
          <li className='p__opensans'><a href="#packages">Packages</a></li>
          <li className='p__opensans'><a href="#testimonials">Testimonials</a></li>
          <li className='p__opensans'><Link to="/about">About us</Link></li>
        </ul>
      </div>
      <div className="navbar-contact">
        <button className='button'><Link to="/contact-us">Get Started</Link></button>
      </div>

      <div className="navbar-menu">
        <HiOutlineMenu color='#DCCA87' fontSize={35} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <IoCloseOutline fontSize={35} className='container__close' onClick={() => setToggleMenu(false)} />
            <div className="navbar-menu_container-links">
              <ul className='navbar-menu-links'>
                <li className='p__opensans'><Link to="/" onClick={handleClose}>Home</Link></li>
                <li className='p__opensans'><a href="#ourservices" onClick={handleClose}>Our services</a></li>
                <li className='p__opensans'><a href="#packages" onClick={handleClose}>Packages</a></li>
                <li className='p__opensans'><a href="#testimonials" onClick={handleClose}>Testimonials</a></li>                
                <li className='p__opensans'><Link to="/about" onClick={handleClose}>About us</Link></li>
              </ul>
              <div className="navbar-menu_container-links-contact">
               <button className='button'><Link to="/contact-us">Get Started</Link></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Navbar;