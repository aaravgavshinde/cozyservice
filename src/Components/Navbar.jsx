import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export default function Navbar() {
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

  return (
    <div className='navbar-main-div'>
      <div className='logo-box'>
        <img src='images/logo.png' alt='logo' />
      </div>
      <ul>
        <li>
          <a href=''>HOME</a>
        </li>
        <li>
          <a href=''>SERVICES</a>
        </li>
        <li>
          <a href=''>APPLY AS SERVICE PERSON</a>
        </li>
        <li>
          <a href=''>ABOUT US</a>
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
                <li>No results found</li>
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
