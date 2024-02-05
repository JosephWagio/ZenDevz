import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Profile from '../../Assets/dugb_o5sj_230522-PhotoRoom.png-PhotoRoom.png';
import './testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      title: 'Traffic Surge',
      content: 'They transformed our online presence. Their SEO strategies led to a significant surge in website traffic, resulting in increased leads and revenue. Exceptional service by the team. Highly recommend!',
      profileImage: '../../Assets/dugb_o5sj_230522-PhotoRoom.png-PhotoRoom.png',
      author: 'Alex, Alex Hardware Solutions',
    },
    {
        id: 2,
        title: 'Digital Revolution',
        content: 'They revolutionized our online presence. Their cutting-edge web development surpassed expectations, delivering a sleek design and advanced functionality. A true partner in our digital journey. Grateful for the expertise! ',
        profileImage: 'path/to/image1.jpg',
        author: 'Sarah, Digital Spark Co.',
    },
    {
        id: 3,
        title: 'SEO Mastery',
        content: 'We experienced incredible SEO mastery. Our website now ranks at the top, leading to more engagement and business growth. Phenomenal service that exceeded our expectations. A true game-changer.',
        profileImage: 'path/to/image1.jpg',
        author: 'John, Happy Events LTD',
    },
    {
        id: 4,
        title: 'Web Excellence',
        content: 'We atQuantum Innovations witnessed web development excellence. The sites visual appeal and functionality exceeded expectations. A team that goes above and beyond, ensuring every detail meets satisfaction.',
        profileImage: 'path/to/image1.jpg',
        author: 'Dickson, Quantum Innovations ',
     },
    {
        id: 5,
        title: 'Optimized Success',
        content: 'We achieved success with their SEO expertise. Quick results, higher rankings, and increased organic traffic. A valuable partner for businesses looking to succeed online.',
        profileImage: 'path/to/image1.jpg',
        author: 'Emmanuel, Alpha Solutions Inc',
    },
    {
        id: 6,
        title: 'Digital Transformation',
        content: 'Dynamic Creations experienced a remarkable digital transformation. Their web development skills, from conceptualization to execution, were seamless. Professionalism and creativity at its best. Highly recommended for a standout online presence.',
        profileImage: 'path/to/image1.jpg',
        author: 'Emily, Dynamic Creations',
    },
  ];


  return (
    <div className='testimonials section__padding' id='testimonials'>
      <h2 className="headtext__cormorant">Our Reviews</h2>
      <p className="p__opensans">We've worked with some businesses, and this is what they had to say</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
            clickable: true,
          }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        className="mySwiper"  
        modules={[Autoplay, Pagination]}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="test">
            <h4 className="p__cormorant">{testimonial.title}</h4>
            <p className="p__opensans">{testimonial.content}</p>
            <div className="profile">
              <img src={Profile} alt={`Profile of ${testimonial.author}`} />
              <h5 className="p__opensans">{testimonial.author}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
