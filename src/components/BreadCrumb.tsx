import React from 'react'
import Image from 'next/image'
import careImg from '../../public/images/care.jpg'
import '@/scss/heading.scss';


interface BreadCrumbProps{
    page : string;
    pageFull: string;

    
}

export default function BreadCrumb({page , pageFull} : BreadCrumbProps ) {
  return (
    <div className='bread-crumb' >
        
        <Image  src={careImg}   alt='header image' />
    <div className="over-head">
        <h1>{ pageFull}</h1>
        <h5>Home   <span>  -   {page}</span> </h5>

    </div>
      
    </div>
  )
}
