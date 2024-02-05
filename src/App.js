import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import { Footer, Navbar } from './Containers';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className='page__gradient'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;