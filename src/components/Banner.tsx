import React from 'react'
import Image from 'next/image'
import '@/scss/banner.scss'
import Link from 'next/link'
import bannerImg from '../../public/images/banner.png'

export default function Banner() {
  return (
    <div className='banner' >
        <div className="left-col">

        </div>
        <div className="right-col">
          <br />
          <br />
        <div className="left sides p">
            <h2 className='tag' >Hair Haven</h2>
            <h1>Hair Goals ? <br /> We Got You</h1>
            <p>Free Pickup and Delivery Available</p>

          <Link href={'/shop'} >
            <button>
                SHOP NOW
            </button>
          </Link>
            

        </div>
        <div className="right sides" >
        <Image src={bannerImg}  alt='' />

        </div>
   
      
        </div>
    </div>
  )
}
