import React from 'react'
import './Services.css'

export default function Services({componentRef}) {
    return (
        <div className='services-main-div' ref={componentRef}>
            {/* At Home Services */}
            <h1>AT HOME SERVICES</h1>
            <hr />
            <div className='services-box'>
                <a href="/tiffin"><div className="service">
                    <img src="images/food.png" alt="food" />
                    <div className='service-name'>Tiffin Service</div>
                </div></a>
                <a href="/electrician"><div className="service">
                    <img src="images/electrician.png" alt="electrician" />
                    <div className='service-name'>Electrician</div>
                </div></a>
                <a href="/plumber"><div className="service">
                    <img src="images/plumber.png" alt="plumber" />
                    <div className='service-name'>Plumber</div>
                </div></a>
                <a href="/maid"><div className="service">
                    <img src="images/maid.png" alt="maid" />
                    <div className='service-name'>Maid</div>
                </div></a>
                <a href="/painter"><div className="service">
                    <img src="images/painter.png" alt="painter" />
                    <div className='service-name'>Painter</div>
                </div></a>
                <a href="laptop"><div className="service">
                    <img src="images/laptop.png" alt="laptop" />
                    <div className='service-name'>Laptop Repair</div>
                </div></a>
                <a href="/carpenter"><div className="service">
                    <img src="images/carpenter.png" alt="carpenter" />
                    <div className='service-name'>Carpenter</div>
                </div></a>
                <a href="/water"><div className="service">
                    <img src="images/water.png" alt="water" />
                    <div className='service-name'>Water Service</div>
                </div></a>
            </div>

            {/* Rented Services */}
            <h1>RENTED SERVICES</h1>
            <hr />
            <div className='services-box'>
                <a href="/vehicle"><div className="service">
                    <img src="images/bicycle.png" alt="vehicle" />
                    <div className='service-name'>Vehicle</div>
                </div></a>
                <a href="/room"><div className="service">
                    <img src="images/room.png" alt="room" />
                    <div className='service-name'>Room/Hostel</div>
                </div></a>
                <a href="/dress"><div className="service">
                    <img src="images/dress.png" alt="dress" />
                    <div className='service-name'>Dress</div>
                </div></a>
                <a href="/cooler"><div className="service">
                    <img src="images/cooler.png" alt="cooler" />
                    <div className='service-name'>Cooler</div>
                </div></a>
            </div>

            {/* Services in Locality */}
            <h1>SERVICES IN LOCALITY</h1>
            <hr />
            <div className='services-box'>
                <a href="/doctor"><div className="service">
                    <img src="images/doctor.png" alt="doctor" />
                    <div className='service-name'>Doctor</div>
                </div></a>
                <a href="/mess"><div className="service">
                    <img src="images/mess.png" alt="mess" />
                    <div className='service-name'>Mess Service</div>
                </div></a>
                <a href="/mponline"><div className="service">
                    <img src="images/mponline.png" alt="mponline" />
                    <div className='service-name'>MP Online</div>
                </div></a>
                <a href="/auto"><div className="service">
                    <img src="images/auto.png" alt="cooler" />
                    <div className='service-name'>Auto Rickshaw</div>
                </div></a>
            </div>
        </div>
    )
}
