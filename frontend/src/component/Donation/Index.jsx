import React from 'react'
import BankQR from '../../assets/img/all-icon/qr-prabhu.jpg'


import './donation.css'

function Donation() {
  return (

    <>
      <div className="donation-container">
        <h2>For Support</h2><hr />

        <div className="donation">

          <div className="left">
            <h3>"We can't help everyone, but everyone can help someone"</h3>

            <div className="bankNumber">
              <p><span>Bank Name:</span> Agricultural Development Bank Ltd.</p>
              <p><span>AC Holder Name:</span> Barju Yuwa Club</p>
              <p> <span>AC Number:</span> 1234567890987654</p>
            </div>

          </div>

          <div className="right">
            <img src={BankQR} alt="Scann Bank QR Code For Support" />
          </div>

        </div>


      </div>



    </>)
}

export default Donation