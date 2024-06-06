import React from 'react'
import './ApplyAsSP.css'

export default function ApplyAsSP() {
  return (
    <div className='apply-main-div'>
      <h1>Apply as service person page</h1>
      <div className='apply-content'>
        <div className='apply-box'>
          <div className='apply-heading'>Join CozyService Today!</div>
          <div className='apply-desc'>Are you a skilled professional looking to expand your customer base? CozyService offers a unique opportunity to connect with clients seeking quality services. Apply now and enjoy the benefits of being part of a trusted network.</div>
        </div>

        <div className='apply-box'>
          <div className='apply-heading'>Why Join CozyService?</div>
          <ul className='apply-list'>
            <li><b>Increase Your Visibility:</b> Reach more customers in your area. </li>
            <li><b>Quality Leads:</b>  Get matched with clients who need your specific skills. </li>
          </ul>
        </div>

        <div className='apply-box'>
          <div className='apply-heading'>How to Apply</div>
          <ul className='apply-list'>
            <li><b>Enter Details:</b> Fill the form in the bottom right. </li>
            <li><b>Submit:</b> Click 'Submit' to send us your details. </li>
          </ul>
        </div>

        <div className='apply-box'>
          <div className='apply-heading'>Requirements</div>
          <ul className='apply-list'>
            <li><b>Experience:</b> Proven experience in your field. </li>
            <li><b>Equipment:</b> Own the necessary tools for your services. </li>
            <li><b>Reliability:</b> Commitment to providing high-quality service. </li>
            <li><b>Customer Service:</b> Friendly and professional behaviour. </li>
          </ul>
        </div>

        <div className='apply-box'>
          <div className='apply-heading'>Ready to Get Started?</div>
          <div className='apply-desc'>Apply now and become part of the CozyService family! Enhance your business and connect with clients who value quality and reliability.</div>
        </div>
      </div>
    </div>
  )
}
