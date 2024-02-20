import React from 'react'
import Image from 'next/image'
import careImg from '../../public/images/care.jpg'
import '@/scss/heading.scss';

export default function BreadCrumb() {
  return (
    <div className='bread-crumb' >
        
        <Image  src={careImg}   alt='header image' />
    <div className="over-head">
        <h1>Hair Haven Shop</h1>
        <h5>Home   <span>  -   Shop</span> </h5>

    </div>
      
    </div>
  )
}
