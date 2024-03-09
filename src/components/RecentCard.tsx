import React from 'react'
import Image from 'next/image';
import blogimage from '../../public/images/blog1.jpg'
import '@/scss/recentcard.scss'
import Link from 'next/link';


interface recentCardProps{
    heading : string;
    date: string;
    imageUrl : string;
    id:number;
}



function RecentCard( {heading , date, imageUrl, id}: recentCardProps ) {
  return (
    <div>
        <Link href={`/blog/${id}`} >
        <div className="blog__sidebar__recent__item blog__details__author">
            <div className="blog__sidebar__recent__item__pic">
                
                <Image className='blogimage' width={300} height={300} src={imageUrl} alt='blogimage' />
            </div>
            <div className="blog__sidebar__recent__item__text">
                <h6> {heading} </h6>
                <span>{date}</span>
            </div>
            </div>
            </Link>
        </div>
  )
}

export default RecentCard