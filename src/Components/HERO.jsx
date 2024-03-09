import React, { useEffect, useState } from 'react'
import './HERO.css'

export default function HERO(props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Adjust the number based on the number of slides
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className='hero-main-div'>
      {/* Left Section */}
      <div className='hero-left-section'>
        <div className='hero-main-heading'>We Help You Contact <span>Service Providers</span> Nearby!</div>
        <div>
          <a onClick={props.compoA}><button className='services-btn'>Services</button></a>
          <a href="/apply"><button className='provide-service-btn'>Provide Service</button></a>
        </div>
        <div className='hero-content'>Contact service providers, find houses for rent, details of libraries in the locality.. and much more</div>
      </div>

      {/* Right Section */}
      <div className='hero-right-section'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="images/img1.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="images/img2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="images/img3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="images/img4.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}
