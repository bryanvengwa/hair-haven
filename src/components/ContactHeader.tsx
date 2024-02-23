import React from 'react';
import { FaPhone , FaMapMarkerAlt, FaStopwatch, FaRegClock,   FaRegEnvelope } from 'react-icons/fa';
import '@/scss/contact.scss'

function ContactHeader() {
  return (
    <div className='contact-container1' >
      <div className=" flex flex-col gap-3 items-center ">
       
          <FaPhone className="phone-icon" style={{ transform: 'rotate(90deg)' }} />
        <h3>PHONE</h3>
        <p>+01-3-8888-6868</p>
      </div>
      <div className="contact-container flex flex-col gap-3 items-center ">
       
       <FaRegEnvelope className="phone-icon" />
     <h3>PHONE</h3>
     <p>+01-3-8888-6868</p>
   </div>
      <div className="contact-container flex flex-col gap-3 items-center ">
       
          <FaMapMarkerAlt className="phone-icon"  />
        <h3>PHONE</h3>
        <p>+01-3-8888-6868</p>
      </div>
      <div className="contact-container flex flex-col gap-3 items-center ">
       
          <FaRegClock className="phone-icon" />
        <h3>PHONE</h3>
        <p>+01-3-8888-6868</p>
      </div>

    </div>
  );
}

export default ContactHeader;
