import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer-main-div'>
            <div className="footer-content">
                <div>
                    <div className='footer-heading'>Quick Links</div>
                    <ul className='footer-links'>
                        <a href=""><li>HOME</li></a>
                        <a href=""><li>SERVICES</li></a>
                        <a href=""><li>ABOUT US</li></a>
                    </ul>
                </div>
                <div>
                    <div className='footer-heading'>Popular Services</div>
                    <ul className='footer-links'>
                        <a href=""><li>TIFFIN SERVICE</li></a>
                        <a href=""><li>WATER SERVICE</li></a>
                        <a href=""><li>ELECTRICIAN</li></a>
                        <a href=""><li>RENT COOLER</li></a>
                    </ul>
                </div>
                <div>
                    <div className='footer-heading'>Want to provide Services or Rent up your things? Drop down your details!</div>
                    <form action="" className='footer-form'>
                        <div>
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="name">Phone Number:</label>
                            <input type="number" /></div>
                        <div>
                            <label htmlFor="name">Service/Item Name:</label>
                            <input type="text" />
                        </div>
                    </form>
                    <button className='footer-submit' type="submit">Submit</button>
                </div>
            </div>
            <hr className='footer-hr'/>
            <div className='footer-group-description'>Designed and developed by AG12 Group - CSE A</div>
        </div>
    )
}

