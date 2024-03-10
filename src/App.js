import './App.css';
import React, { useRef } from 'react';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import ApplyAsSP from './Components/ApplyAsSP';
import AllCompo from './Components/AllCompo';
import Navbar from './Components/Navbar';
// Services
import Tiffin from './Components/All Services/Tiffin';
import Electrician from './Components/All Services/Electrician';
import Plumber from './Components/All Services/Plumber';
import Maid from './Components/All Services/Maid';
import Painter from './Components/All Services/Painter';
import Laptop from './Components/All Services/Laptop';
import Carpenter from './Components/All Services/Carpenter';
import Water from './Components/All Services/Water';
import Vehicle from './Components/All Services/Vehicle';
import Room from './Components/All Services/Room';
import Dress from './Components/All Services/Dress';
import Cooler from './Components/All Services/Cooler';
import Doctor from './Components/All Services/Doctor';
import Mess from './Components/All Services/Mess';
import Mponline from './Components/All Services/Mponline';
import Auto from './Components/All Services/Auto';

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

  // /tiffin /electrician /plumber /maid /painter /laptop /carpenter /water /vehicle /room /dress /cooler /doctor /mess /mponline /auto
  return (
    <div className="App">
      <Navbar compoA={compoA}/>
      <Routes> 
        <Route exact path='/' element={<AllCompo componentRef={service} compoA={compoA}/>} />
        <Route exact path='/apply' element={<ApplyAsSP/>} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/tiffin' element={<Tiffin />} /> 
        <Route exact path='/electrician' element={<Electrician />} />
        <Route exact path='/plumber' element={<Plumber />} />
        <Route exact path='/maid' element={<Maid />} />
        <Route exact path='/painter' element={<Painter />} />
        <Route exact path='/laptop' element={<Laptop />} />
        <Route exact path='/carpenter' element={<Carpenter />} />
        <Route exact path='/water' element={<Water />} />
        <Route exact path='/vehicle' element={<Vehicle />} />
        <Route exact path='/room' element={<Room />} />
        <Route exact path='/dress' element={<Dress />} />
        <Route exact path='/cooler' element={<Cooler />} />
        <Route exact path='/doctor' element={<Doctor />} />
        <Route exact path='/mess' element={<Mess />} />
        <Route exact path='/mponline' element={<Mponline />} />
        <Route exact path='/auto' element={<Auto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
