import React from 'react'
import './CommonCSS.css'

export default function Laptop() {

    const details = [
        { name: "Dummy Name 1", contact: "+91 88888 XXXXX", location: "Vidisha, M.P.", experience: "5+ Years" },
        { name: "Dummy Name 2", contact: "+91 88888 XXXXX", location: "Vidisha, M.P.", experience: "3+ Years" },
        { name: "Dummy Name 3", contact: "+91 88888 XXXXX", location: "Vidisha, M.P.", experience: "7+ Years" },
        { name: "Dummy Name 4", contact: "+91 88888 XXXXX", location: "Vidisha, M.P.", experience: "2+ Years" },
        { name: "Dummy Name 5", contact: "+91 88888 XXXXX", location: "Vidisha, M.P.", experience: "1+ Years" },
        { name: "Dummy Name 6", contact: "+91 88888 XXXXX", location: "Vidisha, M.P.", experience: "10+ Years" },
    ];

    return (
        <div className='details-main-div'>
            <div className='back-to-home'><a href="/">&lt;-- Back to Home</a></div>
            <h1 className='details-heading'>Laptop Reparing Service</h1>
            <hr />
            <div className='details-description'>Looking for a laptop reparing person at your home? Here are details for the ones in Vidisha.</div>
            <div className='details-box'>
                {details.map((detail, index) => (
                    <div className='detail' key={index}>
                        <img src="images/user.png" alt="user" />
                        <div className='details-content'>
                            <div className='detail-name'>{detail.name}</div>
                            <ul>
                                <li><img src="images/phone.png" alt="contact" />{detail.contact}</li>
                                <li><img src="images/location.png" alt="location" />{detail.location}</li>
                                <li><img src="images/experience.png" alt="experience" />{detail.experience}</li>
                            </ul>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
