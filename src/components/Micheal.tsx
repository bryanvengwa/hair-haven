import React from 'react'
import Image from 'next/image';
import blogimage from '../../public/images/blog1.jpg'
import '@/scss/micheal.scss'


interface MichealProps{
    title : string;
    author : string;
    imageUrl : string;
}


function Micheal( {title, author,imageUrl}: MichealProps ) {
  return (
    <div className="blog__details__author">
    <div className="blog__details__author__pic">
    <Image className='blogimage' width={300} height={300} src={imageUrl} alt='blogimage' />
   </div>
   <div className="blog__details__author__text">
       <h6>{title}</h6>
           <span>{author}</span>
   </div>
   </div>
  )
}



export default Micheal