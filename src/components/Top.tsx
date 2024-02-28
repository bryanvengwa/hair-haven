import React from 'react'
import { GlobalContextProvider } from '@/app/context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram , FaFacebook, FaPinterest, FaEnvelope , FaUser , FaLinkedinIn} from 'react-icons/fa';
import { faChevronDown, faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function Top() {
    
  return (
    <GlobalContextProvider>
    <div className='top ' >
        <div className="container flex items-center justify-center justify-between ">
        <div className="leftie flex gap-2">
            <FaEnvelope />
            <a href="">hello@hairhaven.com</a>
            <div className="line"></div>
            <p>Free shipping for all order of $99</p>
        </div>
        <div className="rightie flex items-center gap-1">


            <div className="icon-contianer flex gap-3 items-center justify-center ">
                <FaFacebook/>
                <FaInstagram/>
                <FaLinkedinIn/>
                <FaPinterest/>
            <div>
            <div>
      
    </div>
    </div>

            </div>
            {/* <div className="line"></div> */}
            <div className="country-container flex items-center gap-3">
            <div className="line"></div>
                <p  className=' text-3xl' >🇺🇸</p>
                <p>English</p>
                <FontAwesomeIcon icon={faChevronDown} />
                <div className="line"></div>

            </div>
            <div className="login-container flex items-center gap-1">
                <FaUser/> <p>Login</p>

            </div>
        </div>
      
        </div>
    </div>
    </GlobalContextProvider>
  )
}
