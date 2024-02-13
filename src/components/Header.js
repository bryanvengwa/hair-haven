import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
  return (
          <>
      <div className='navigation'>
        <div className='logo-container' >
      <Image src={logo} alt='logo'  />

      </div>
          <div className='menu'>
            <div className='bar ' ></div>
            <div className='bar ' ></div>
            <div className='bar ' ></div>

     </div>

    </div>
    <br/>
    <div className='icon-container' >
      
    <div className='bubble-container'>
    <FontAwesomeIcon icon={faHeart} className='icon' />
    <div className='bubble' >
3

    </div>
    </div>
      <div className='bubble-container' >
    <FontAwesomeIcon icon={faShoppingCart} className='icon' />
      <div className='bubble' >
3
      </div>
      </div>

<p>Item : <span>$150.00</span></p>
    </div>
          </>
  )
}
