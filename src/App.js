import './App.css';
import React, { useRef } from 'react';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import ApplyAsSP from './Components/ApplyAsSP';
import AllCompo from './Components/AllCompo';
import Navbar from './Components/Navbar';

function App() {

  /// Navigation Links
  const service = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const compoA = (e) => {
    e.preventDefault();
    scrollToRef(service);
  };

  return (
    <div className="App">
      <Navbar compoA={compoA}/>
      <Routes> 
        <Route exact path='/' element={<AllCompo componentRef={service}/>} />
        <Route exact path='/apply' element={<ApplyAsSP/>} />
        <Route exact path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
