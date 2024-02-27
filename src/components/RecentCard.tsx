import React from 'react'
import Image from 'next/image';
import blogimage from '../../public/images/blog1.jpg'
import '@/scss/recentcard.scss'


interface recentCardProps{
    heading : string;
    date: string;
    imageUrl : string;
}



function RecentCard( {heading , date, imageUrl}: recentCardProps ) {
  return (
    <div>
        <a href="#" className="blog__sidebar__recent__item blog__details__author">
            <div className="blog__sidebar__recent__item__pic">
                <Image className='blogimage' width={300} height={300} src={imageUrl} alt='blogimage' />
            </div>
            <div className="blog__sidebar__recent__item__text">
                <h6> {heading} </h6>
                <span>{date}</span>
            </div>
            </a>
        </div>
  )
}

export default RecentCard