import React from 'react'
import { BsFillSendFill } from "react-icons/bs"; 

import './contact.css'
function Contact() {
  return (
    <>
      <div className="form-container">
        <h2>Contact Us!</h2>

        <form >

          <div className='input'>
            <label htmlFor="text">Name:</label>
            <input type="text" placeholder='Enter Your Name' className='text' />
          </div>

          <div className='input'>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Enter Your Email' className='email' />
          </div>

          <div className='input'>
            <label htmlFor="textarea">Message:</label>
            <input type="textarea" placeholder='Write Message Here!' className='textarea' />
          </div>

          <button>Send <BsFillSendFill /></button>
        </form>

      </div>

    </>
  )
}

export default Contact