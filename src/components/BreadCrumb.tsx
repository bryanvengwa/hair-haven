import React from 'react';
import Image from 'next/image';
import '@/scss/heading.scss'; 

interface BreadCrumbProps {
  page: string;
  pageFull: string;
  imageUrl: string; 
}

export default function BreadCrumb({ page, pageFull, imageUrl }: BreadCrumbProps) {
  return (
    <div className='bread-crumb'>
      <Image src={imageUrl} alt='header image'   layout="fill"
  objectFit="cover"  /> 
      <div className="over-head">
        <h1>{pageFull}</h1>
        <h5>Home   <span>  -   {page}</span> </h5>
      </div>
    </div>
  );
}
