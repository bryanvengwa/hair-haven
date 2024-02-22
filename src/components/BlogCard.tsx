import React from 'react'
import bannerImg from '../../public/images/blog1.jpg'
import Image from 'next/image'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCalendarTimes,  faCalendarCheck,  } from '@fortawesome/free-solid-svg-icons';
import { faComment  } from '@fortawesome/free-solid-svg-icons';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BlogCard() {
  return (
    <div>
              <div className='card product-card blog-card ' >
           <div className='img-container' >
            <Image src={bannerImg} alt='product' />
            
           </div>
           <div className="body flex flex-col gap-3 p-2 pt-3 ">
                <div  className="flex-container ">
               <div className='flex flex-row  gap-2 ' >
               <FontAwesomeIcon icon={faCalendarAlt} />
                    <h4>May 4,2019</h4>
               </div>
                 <div className='flex flex-row gap-2' >
                 <FontAwesomeIcon icon={faComment}  />
                    <h4>5</h4>
                 </div>
                </div>
                <h4>Your Guide to Smoother, Sleeker Hair</h4>
                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
           </div>
        </div>
    </div>
  )
}
