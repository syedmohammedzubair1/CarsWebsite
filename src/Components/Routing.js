import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Cars from './Cars';
function Routing() {
  return (
    <Routes>
       <Route path='/'element={<Home/>}/> 
       <Route path='/about'element={<About/>}/> 
       <Route path='/services'element={<Services/>}/> 
       <Route path='/cars'element={<Cars/>}/> 
       <Route path='/contact'element={<Contact/>}/> 
    </Routes>
  );
}

export default Routing;
