import React from 'react';
import Image from 'next/image';
import '@/scss/heading.scss'; // assuming this file exists and styles the component

interface BreadCrumbProps {
  page: string;
  pageFull: string;
  imageUrl: string; // new prop for image URL
}

export default function BreadCrumb({ page, pageFull, imageUrl }: BreadCrumbProps) {
  return (
    <div className='bread-crumb'>
      <Image src={imageUrl} alt='header image'   layout="fill"
  objectFit="cover"  /> // use the imageUrl prop
      <div className="over-head">
        <h1>{pageFull}</h1>
        <h5>Home   <span>  -   {page}</span> </h5>
      </div>
    </div>
  );
}
