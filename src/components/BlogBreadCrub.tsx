import React, { useContext } from 'react'
import Image from 'next/image';
import '@/scss/heading.scss'; // assuming this file exists and styles the component
import blog from '../../public/images/blog.jpg';
import blogimage from '../../public/images/blog1.jpg'
import { BlogContext } from '@/app/context/BlogContext';


function BlogBreadCrub({params, currentBlog } : any ) {
  console.log(currentBlog);

  return (

    <div className='bread-crumb blog-details-hero'>

    <Image src={blog} alt='header image'   layout="fill"objectFit="cover"  />
            <div className="over-head">
                <h1 className='heroo' style={{textAlign:'center'}} > {currentBlog ? currentBlog.title1: 'blog notfoud'} </h1>
            <h5>Home   <span>  -  blog</span> </h5>
        </div>
    </div>
    
    // SECTION

    
    
  )
}

export default BlogBreadCrub


