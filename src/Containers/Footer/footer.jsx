import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlinePhoneMissed } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import Logo from '../../Assets/ZEN DEVZ.png';
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-text'>
        <div className='footer-logo'>
        <Link to="/"><img src={Logo} alt="logo" /></Link>         
        <p className='p__opensans'>Web solutions that shine, SEO strategies that elevate. Unleashing your digital potential with innovation, precision, and unparalleled expertise for online success.</p>
        </div>
        <div className='footer-links'>
          <h4 className='p__opensans'>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="footer-address">
          <h4 className='p__opensans'>Address</h4>
          <span><HiLocationMarker /> Diamond Valley Estate, Port-Harcourt, Nigeria</span>
          <a href="+2347041788678"><MdOutlinePhoneMissed /> +234 704 178 8678</a>
          <a href="josephwagio@outlook.com"><BiMailSend /> josephwagio@outlook.com</a>
        </div>
        <div className='footer-socials'>
          <h4 className="p__opensans">Socials</h4>
          <a href="https://www.instagram.com/zendevz/"><FaInstagram /></a>
          <a href=""><FaWhatsapp /></a>
          <Link to="/contact-us"><button className='button'>Get Started</button></Link>
        </div>
      </div>
      <div className="footer-copyright">
        <span className='p__opensnans'>Copyright © 2024 ZENDEVZ Company All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer;