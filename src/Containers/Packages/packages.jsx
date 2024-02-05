import React from 'react'

import './packages.css';
import { Link } from 'react-router-dom';
const Packages = () => {
  return (
    <div className='packages section__padding' id='packages'>
      <h2 className="headtext__cormorant">Pick A package that fits your <br/> business goals</h2>
      <div className='packages-flex'>
        <div className='pack'>
          <h4 className='p__cormorant'>Web Plan</h4>
          <h3 className="p__opensans">N150k <sub>only</sub></h3>
          <ul>
            <li>✓ Website development</li>
            <li>✓ Website support</li>
            <li>✓ Website management</li>
            <li>✓ Seo Optimization</li>
          </ul>
          <a href="#">
            <button className='button'><Link to="/contact-us">Get Started</Link></button>
          </a>
        </div>
        <div className='pack'>
          <h4 className='p__cormorant'>Social Media Plan</h4>
          <h3 className="p__opensans">N300k <sub>only</sub></h3>
          <ul>
            <li>✓ Website development</li>
            <li>✓ Website support</li>
            <li>✓ Website management</li>
            <li>✓ Seo Optimization</li>
          </ul>
          <a href="#">
            <button className='button'><Link to="/contact-us">Get Started</Link></button>
          </a>
        </div>
        <div className='pack'>
          <h4 className='p__cormorant'>Premium Plan</h4>
          <h3 className="p__opensans">N500k <sub>only</sub></h3>
          <ul>
            <li>✓ Website development</li>
            <li>✓ Website support</li>
            <li>✓ Website management</li>
            <li>✓ Seo Optimization</li>
          </ul>
          <a href="#">
            <button className='button'><Link to="/contact-us">Get Started</Link></button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Packages;