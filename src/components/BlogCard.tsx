import React from 'react'
import bannerImg from '../../public/images/banner.png'
import Image from 'next/image'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCalendarTimes,  faCalendarCheck,  } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BlogCard() {
  return (
    <div>
              <div className='card product-card' >
           <div className='img-container' >
            <Image src={bannerImg} alt='product' />
            
           </div>
           <div className="body flex flex-col gap-3 p-1">
                <div className="flex-container">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    <h4>May 4,2019</h4>
                    <h4></h4>
                </div>
                <h3>Vaida dye</h3>
                <h4>$ 30.00</h4>
           </div>
        </div>
    </div>
  )
}
