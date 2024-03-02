import React, { useContext } from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navlinks from '@/components/Navlinks'
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { CartContext } from '@/app/context/CartContext';




export default function Header() {
const {totalPrice, items} = useContext(CartContext)
const [isOpen , setIsOpen] = useState(false)
const [open , setOpen] = useState(false)

function toggle(number :  string){
  if(number === 'menu'){

    setIsOpen(!isOpen)
  }else{
    setOpen(!open)
  }
}


  return (
          <div className='container'>
            <br />
      <div className='navigation p-1'>
        <div className='logo-container ' >
      <Image src={logo} alt='logo' objectFit='cover' height={'50'} />

      </div>
          <div onClick={()=>toggle('menu')} className='menu'>
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
  { items ? items.length : 0 }
        </div>
        </div>
  
  <p>Item : <span>$ {totalPrice}</span></p>
      </div>

    </div>

    <div className={`slide-menu ${ isOpen ? '' : 'closed-menu' } `} >
    <div className='logo-container mt-10 flex items-center  justify-center' >
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
  
  <p>Item : <span>$ {totalPrice}</span></p>
      </div>
<div className="middle-container flex items-center justify-center pt-1">
<div className="country-container flex items-center gap-3">
            <div className="line"></div>
                <p  className=' text-3xl' >🇺🇸</p>
                <p>English</p>
                {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                <div className="line"></div>
                <div className="login-container flex items-center gap-1">
                <FaUser/> <p>Login</p>

            </div>

            </div>
</div>
            <div className="menu-section pt-4">

            <div className="menu-container pt-3">
            <div onClick={()=>toggle('menu2')} className='menu'>
            <div className='bar ' ></div>
            <div className='bar ' ></div>
            <div className='bar ' ></div>

     </div>
            </div>
            <ul className={`pt-2 ${ open ? 'hide-ul' :'' }`}>
              <li><Link href={'/'} >HOME</Link></li>
              <li><Link href={'/shop'}>SHOP</Link></li>
              <li><Link href={'/blog'}>BLOG</Link></li>
              <li><Link href={'/contact'}>CONTACT</Link></li>
              <li  className='drop' > <h4>PAGES</h4> </li>
              <li> <Link href={'/cart'}  >Shopping cart </Link></li>
              <li> <Link href={'/checkout'}   >Checkout  </Link></li>
              <li> <Link href={'/blog-details'}   >Blog Details </Link></li>
              <li> <Link href={'/shop-details'}   >Shop Details  </Link></li>


            </ul>
            </div>
         

    </div>
    <div onClick={()=>toggle('menu')}  className={`slide-menu-overlay ${ isOpen ? '' : 'closed-menu' } `} ></div>
    

          </div>
  )
}
