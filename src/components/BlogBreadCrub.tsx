import React from 'react'
import Image from 'next/image';
import '@/scss/heading.scss'; // assuming this file exists and styles the component
import blog from '../../public/images/blog.jpg';
import blogimage from '../../public/images/blog1.jpg'



function BlogBreadCrub() {
  return (

    <div className='bread-crumb blog-details-hero'>
    <Image src={blog} alt='header image'   layout="fill"objectFit="cover"  />
            <div className="over-head">
                <h1 className='heroo'>njkfgh</h1>
            <h5>Home   <span>  -  </span> </h5>
        </div>
    </div>
    
    // SECTION

    
    
  )
}

export default BlogBreadCrub


