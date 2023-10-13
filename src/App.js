
import { Routes, Route } from 'react-router-dom'


import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>



          <Route path='/Portfolio' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Resume' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/*' element={<NotFound />} />




      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
