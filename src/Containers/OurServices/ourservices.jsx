import React from 'react'

import WebDev from '../../Assets/Wavy_Bus-20_Single-04-PhotoRoom.png-PhotoRoom.png';
import SEO from '../../Assets/36921-PhotoRoom.png-PhotoRoom.png'
import SMM from '../../Assets/4950546-PhotoRoom.png-PhotoRoom.png'
import './ourservices.css'
const Ourservices = () => {
  return (
    <div className='service section__padding' id='ourservices'>
      <h1 className='headtext__cormorant'>Our Services</h1>
      <p className='p__opensans'>We offer a variety of services with the sole purpose of growing your business and making it marketable.</p>
      <div className='service-flex'>
        <div className='services'>
          <img src={WebDev} alt="webdev" />
          <h4 className='headtext__cormorant'>Web Development</h4>
          <p className='p__opensans'>Crafting digital excellence through tailored web development. Our experts build responsive, innovative websites, ensuring your online presence matches your business aspirations.</p>
        </div>
        <div className='services'>
          <img src={SEO} alt="seo" />
          <h4 className='headtext__cormorant'>SEO Optimization</h4>
          <p className='p__opensans'>Elevate your online visibility with our advanced SEO services. We optimize keywords, enhance content, and boost rankings for lasting digital success.</p>
        </div>
        <div className='services'>
          <img src={SMM} alt="smm" />
          <h4 className='headtext__cormorant'>Social Media Mangement</h4>
          <p className='p__opensans'>Supercharge your online presence with our expert social media management. We create engaging content, build communities, and elevate your brand across platforms.</p>
        </div>
      </div>
    </div>
  )
}

export default Ourservices;