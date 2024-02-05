import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

import HeaderImg from '../../Assets/seo-optimization-3d-render-cartoon-illustration-PhotoRoom.png-PhotoRoom.png'

import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const bounceTransition = {
    y: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: "easeInOut"
    }
  };
  
  return (
    <div className='header' id='home'>
      <div className='section__margin'>
        <div className='header-content'>
          <h3 className='p__opensans'>DO IT BETTER TODAY</h3>
          <h1 className="headtext__cormorant">
            Let's {' '}
            <span className="headtext__cormorant">
              <Typewriter
                words={['Make Your Website', 'Manage Your Social Media']}
                loop={100}
                cursor 
                cursorColor='#FFCC29'
                cursorStyle='|'
                typeSpeed={120}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className='p__cormorant' style={{margin: '2rem 0'}}>We offer Comprehensive web solutions: <br/> development, SEO mastery, and digital excellence, tailored for success.</p>
          <div className="header-content__contact">
          <button className='button'><Link to="/contact-us">Get Started</Link></button>
          </div>
        </div>
        <motion.div className="header-image" transition={bounceTransition} animate={{ y: [10, -10, 10]}} >
          <img src={HeaderImg} alt="img" />
        </motion.div>
      </div>
    </div>
  )
}

export default Header;