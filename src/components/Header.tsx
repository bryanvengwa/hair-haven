import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navlinks from '@/components/Navlinks'
import { useState } from 'react';



export default function Header() {
const [isOpen , setIsOpen] = useState(false)

function toggle(){
  setIsOpen(!isOpen)
}


  return (
          <div className='container'>
            <br />
      <div className='navigation p-1'>
        <div className='logo-container ' >
      <Image src={logo} alt='logo' objectFit='cover' height={'50'} />

      </div>
          <div onClick={toggle} className='menu'>
            <div className='bar ' ></div>
            <div className='bar ' ></div>
            <div className='bar ' ></div>

     </div>
     <Navlinks/>

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

    </div>

    <div className={`slide-menu ${ isOpen ? '' : 'closed-menu' } `} >
    <div className='logo-container ' >
      <Image src={logo} alt='logo' objectFit='cover' height={'50'} />

      </div>
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

    </div>
    <div onClick={toggle}  className={`slide-menu-overlay ${ isOpen ? '' : 'closed-menu' } `} ></div>
    

          </div>
  )
}
