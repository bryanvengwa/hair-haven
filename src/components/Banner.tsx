import React from 'react'
import Image from 'next/image'
import bannerImg from '../../public/images/banner.jpg'

export default function Banner() {
  return (
    <div>
        <div className="left sides">
            <h2>Hair Haven</h2>
            <h1>Hair Goals ? We Got You</h1>
            <p>Free Pickup and Delivery Available</p>

            <button>
                SHOP NOW
            </button>

        </div>
        <div className="right sides" >
            <Image src={bannerImg}  alt='' />

        </div>
   
      
    </div>
  )
}
