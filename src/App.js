
import { Routes, Route } from 'react-router-dom'


import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>



          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/*' element={<NotFound />} />




      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
