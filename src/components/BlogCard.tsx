import React from 'react'
import bannerImg from '../../public/images/blog1.jpg'
import Image from 'next/image'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCalendarTimes,  faCalendarCheck,  } from '@fortawesome/free-solid-svg-icons';
// import { faComment  } from '@fortawesome/free-solid-svg-icons';
import { FaRegCalendar , FaRegComment} from 'react-icons/fa';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogImage from './BlogImage';

interface blogProps {
  title : string;
  date : string;
  comments : number;
  description : string;
  id: number;
  image: string;
  
}


export default function BlogCard({title, date, comments, description, id, image}:blogProps) {

  return (
    <div>
              <div className='card product-card blog-card ' >
           <Link href={`/blog/${id}`} className='img-container' >
           
            <Image src={image} className='img-fluid' width={500} height={500} alt='blog image'/>
            
           </Link>
           <div className="body flex flex-col gap-3  pt-3 ">
                <div  className="flex-container flex gap-10 ">
               <div className='flex flex-row  gap-2 ' >
               <FaRegCalendar color='#b2b2b2' />
                    <h3>{date}</h3>
               </div>
                 <div className='flex flex-row gap-2' >
                 <FaRegComment  color='#b2b2b2' />
                    <h3> {comments} </h3>
                 </div>
                </div>
                <h4>{ title }</h4>
                <p> {description} </p>
           </div>
        </div>
    </div>
  )
}
