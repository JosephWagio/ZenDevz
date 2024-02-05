import React from 'react';
import { BiTachometer } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa6";
import { GiShakingHands } from "react-icons/gi";
import { TbSettingsCheck } from "react-icons/tb";

import AboutUs from '../../Assets/aboutus.png'
import './aboutus.css';

const Aboutus = () => {
  return (
    <div className='aboutus section__padding' id='aboutus'>
      <div className="aboutus-content">
        <h3 className='p__cormorant'>Who We Are</h3>
        <h1 className='headtext__cormorant'>Crafting digital brilliance: web development and SEO mastery for online excellence and growth.</h1>
        <p className='p__opensans'>At the heart of our philosophy is the belief that transformative digital experiences are catalysts for business success. We thrive on innovation, creativity, and unwavering dedication to empower every client's journey to enduring online excellence.</p>
        <h2 className='p__cormorant'>What we Offer</h2>
        <ul>
          <li><BiTachometer color='var(--color-gold)' />   Fast service</li>
          <li><GiShakingHands />   Reliability</li>
          <li><TbSettingsCheck />   Efficiency</li>
          <li><FaHeadset />   Responsive Communication</li>
        </ul>
      </div>
      <div className='aboutus-image'>
        <img src={AboutUs} alt="img" />
      </div>
    </div>
  )
}

export default Aboutus;