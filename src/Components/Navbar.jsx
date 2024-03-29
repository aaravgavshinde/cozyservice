import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [inputClicked, setInputClicked] = useState(false);
  const searchBoxRef = useRef(null);

  const services = [
    { name: "Tiffin", link: "/tiffin" },
    { name: "Electrician", link: "/electrician" },
    { name: "Plumber", link: "/plumber" },
    { name: "Maid", link: "/maid" },
    { name: "Painter", link: "/painter" },
    { name: "Laptop reparing", link: "/laptop" },
    { name: "Carpenter", link: "/carpenter" },
    { name: "Water service", link: "/water" },
    { name: "Vehicle", link: "/vehicle" },
    { name: "Room", link: "/room" },
    { name: "Dress", link: "/dress" },
    { name: "Cooler", link: "/cooler" },
    { name: "Doctor", link: "/doctor" },
    { name: "Mess", link: "/mess" },
    { name: "MP-online", link: "/mponline" },
    { name: "Auto-rickshaw", link: "/auto" },
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

  const handleInputEnter = () => {
    setInputClicked(true);
  };
  const handleInputLeave = () => {
    setInputClicked(false);
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
  const showLink = location.pathname === '/';

  return (
    <div className='navbar-main-div'>
      <div className='logo-box'>
        <a href=""><img src='images/logo.png' alt='logo' /></a>
      </div>
      <ul>
        <li>
          <a href='/'>HOME</a>
        </li>
        {showLink && <li>
          <a onClick={props.compoA}>SERVICES</a>
        </li>}
        <li>
          <a href='/apply'>APPLY</a>
        </li>
        <li>
          <a href='/aboutus'>ABOUT US</a>
        </li>
      </ul>
      <div className='search-box' ref={searchBoxRef}>
        <input
          onMouseEnter={handleInputEnter}
          onMouseLeave={handleInputLeave}
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
                    <div><a href={service.link}>{service.name}</a></div>
                  </div>
                ))
              ) : (
                <div>No results found</div>
              )
            ) : (
              services.map((service, index) => (
                <div key={index}>
                  <div><a href={service.link}>{service.name}</a></div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}