import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [inputClicked, setInputClicked] = useState(false);
  const searchBoxRef = useRef(null);

  const services = [
    { name: "Tiffin" },
    { name: "Electrician" },
    { name: "Plumber" },
    { name: "Maid" },
    { name: "Painter" },
    { name: "Laptop reparing" },
    { name: "Carpenter" },
    { name: "Water service" },
    { name: "Vehicle" },
    { name: "Room" },
    { name: "Dress" },
    { name: "Cooler" },
    { name: "Doctor" },
    { name: "Restaurent" },
    { name: "MP-online" },
    { name: "Auto-rickshaw" },
];

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    // Filter services based on the search input
    const filtered = services.filter((service) => {
      return service.name.toLowerCase().includes(input.toLowerCase());
    });

    setFilteredServices(filtered);
  };

  const handleInputClick = () => {
    setInputClicked(true);
  };

  const handleClickOutside = (e) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setInputClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Check if the current location matches a specific route where we want to hide the navbar
  const location = useLocation();
  const hideLink = location.pathname === '/apply' || location.pathname === '/aboutus';

  return (
    <div className='navbar-main-div'>
      <div className='logo-box'>
      <a href=""><img src='images/logo.png' alt='logo' /></a>
      </div>
      <ul>
        <li>
          <a href='/'>HOME</a>
        </li>
        {!hideLink &&<li>
          <a onClick={props.compoA}>SERVICES</a>
        </li>}
        <li>
          <a href='/apply'>APPLY AS SERVICE PERSON</a>
        </li>
        <li>
          <a href='/aboutus'>ABOUT US</a>
        </li>
      </ul>
      <div className='search-box' ref={searchBoxRef}>
        <input
          onClick={handleInputClick}
          onChange={handleChange}
          value={searchInput}
          type='text'
          placeholder='Search for a service at home'
          size={30}
        />
        {inputClicked && (
          <div className='search-links'>
            {searchInput.length > 0 ? (
              filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <div key={index}>
                    <div><a href="">{service.name}</a></div>
                  </div>
                ))
              ) : (
                <div>No results found</div>
              )
            ) : (
              services.map((service, index) => (
                <div key={index}>
                  <div><a href="">{service.name}</a></div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}