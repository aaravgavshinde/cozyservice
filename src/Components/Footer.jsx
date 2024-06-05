import React, { useState } from 'react'
import './Footer.css'

export default function Footer() {

    const [uname, setUName] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')

    const collectData = async (e) => {
        if (uname != '' && phone != '' && service != '') {
            e.preventDefault();
            let result = await fetch('http://localhost:80/apply', {
                method: 'post',
                body: JSON.stringify({ uname, phone, service }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            result = await result.json();
            console.log(result)
            setUName('')
            setPhone('')
            setService('')

            alert('Your info has been submitted!')
        }
        else{
            alert('Please fill the form!')
        }
    }

    return (
        <div className='footer-main-div'>
            <div className="footer-content">
                <div>
                    <div className='footer-heading'>Quick Links</div>
                    <ul className='footer-links'>
                        <a ><li>HOME</li></a>
                        {/* onClick={scrollToTop} */}
                        <a href=""><li>SERVICES</li></a>
                        <a href="/aboutus"><li>ABOUT US</li></a>
                    </ul>
                </div>
                <div>
                    <div className='footer-heading'>Popular Services</div>
                    <ul className='footer-links'>
                        <a href="/tiffin"><li>TIFFIN SERVICE</li></a>
                        <a href="/water"><li>WATER SERVICE</li></a>
                        <a href="/electrician"><li>ELECTRICIAN</li></a>
                        <a href="/cooler"><li>RENT COOLER</li></a>
                    </ul>
                </div>
                <div className='footer-form-div'>
                    <div className='footer-heading'>Want to provide Services or Rent up your things? Drop down your details!</div>
                    <form action="post" className='footer-form'>
                        <div>
                            <label name="name">Your Name:</label>
                            <input type="text" value={uname} onChange={(e) => setUName(e.target.value)} required />
                        </div>
                        <div>
                            <label name="phone">Phone Number:</label>
                            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        <div>
                            <label name="service">Service/Item Name:</label>
                            <input type="text" value={service} onChange={(e) => setService(e.target.value)} required />
                        </div>
                    </form>
                    <button className='footer-submit' onClick={collectData} type="submit">Submit</button>
                </div>
            </div>
            <hr className='footer-hr' />
            <div className='footer-group-description'>Designed and developed by AG12 Group - CSE A</div>
        </div>
    )
}

