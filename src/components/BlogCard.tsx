import React from 'react'
import bannerImg from '../../public/images/blog1.jpg'
import Image from 'next/image'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCalendarTimes,  faCalendarCheck,  } from '@fortawesome/free-solid-svg-icons';
// import { faComment  } from '@fortawesome/free-solid-svg-icons';
import { FaRegCalendar , FaRegComment} from 'react-icons/fa';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogImage from './BlogImage';

interface blogProps {
  title : string;
  date : string;
  comments : number;
  description : string;
  
}


export default function BlogCard({title, date, comments, description}:blogProps) {
  return (
    <div>
              <div className='card product-card blog-card ' >
           <div className='img-container' >
            <BlogImage imageUrl={"/images/blog1.jpg"}/>
            
           </div>
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
