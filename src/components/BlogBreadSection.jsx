import React, {useContext, } from 'react';
import { BlogContext }from '../app/context/BlogContext'
import Image from 'next/image';
import '@/scss/blogbreadsection.scss'; 
import '@/scss/footer.scss';// assuming this file exists and styles the component
import RecentCard from './RecentCard';
import { FaInstagram , FaFacebook, FaPinterest, FaLinkedinIn} from 'react-icons/fa';
import { formatArray} from '../utils/FormatArray';
// import blog from '../../public/images/blog.jpg';

import blogimage from '../../public/images/blog1.jpg'
import Micheal from './Micheal'; 


function BlogBreadSection( {params, currentBlog} ) {
    const {threeBlogs} = useContext(BlogContext);

  return (
    <div className="blog-details spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-5 order-md-1 order-2">
                <div className="blog__sidebar">
                    <div className="blog__sidebar__search">
        <form action="#">
    <input type="text" placeholder='Search..' />
        <button type="submit"><span className="icon_search"></span></button>
            </form>
        </div>
    <div className="blog__sidebar__item">
        <h4>Categories</h4>
            <ul>
                <li><a href="#">All</a></li>
                <li><a href="#">Beauty (20)</a></li>
                <li><a href="#">Food (5)</a></li>
                <li><a href="#">Life Style (9)</a></li>
                <li><a href="#">Travel (10)</a></li>
            </ul>
        </div>

<div className="blog__sidebar__item">
<h4>Popular Posts</h4>
<div className="blog__sidebar__recent">
{threeBlogs && threeBlogs.map(blog=>{
        //   let blog = blogData[int]
    
      return   <RecentCard key={blog.id} heading={blog.title1} date={blog.date} imageUrl='/images/blog1.jpg' id={blog.id} />



    })}

</div>
</div>
    </div>
    <div className="blog__sidebar__item">
    <h4>Search By</h4>
    <div className="blog__sidebar__item__tags">
        <a href="#">Apple</a>
        <a href="#">Beauty</a>
        <a href="#">Vegetables</a>
        <a href="#">Fruit</a>
        <a href="#">Healthy Food</a>
        <a href="#">Lifestyle</a>
    </div>
    </div>
    </div>
    <div className="col-lg-8 col-md-7 order-md-1 order-1">
    <div className="blog__details__text">
    <Image className='pic' src={blogimage} alt='blogimage' />
            <p> {currentBlog ? currentBlog.paragraph : " "} </p>
            <h3> {currentBlog ? currentBlog.title2 : " "} </h3>
            <p> {currentBlog ? currentBlog.paragraph2 : ''} </p>
        </div>
     <div className="blog__details__content">
     <div className="row">
     <div className="col-lg-6">
     <div className="blog__details__author">
     <Micheal author={ currentBlog ? currentBlog.profile : "Admin"} title={currentBlog ? currentBlog.author : " "} imageUrl='/images/blog1.jpg'  />
    </div>


    </div>
  <div className="col-lg-6">
  <div className="blog__details__widget">
    <ul>
    <li><span>Categories:</span> { currentBlog ? currentBlog.category : ' '  } </li>
    <li><span>Tags:</span> <div style={{textTransform :"capitalize"}} > All, { currentBlog ? formatArray(currentBlog.tags) : '' } </div>  </li>
    </ul>
    <div className="footer__widget__social">
                    <div className='icon-container' ><FaFacebook className='iconn'/></div>
                    <div className='icon-container' ><FaInstagram className='iconn'/></div>
                    <div className='icon-container' ><FaLinkedinIn className='iconn'/></div>
                    <div className='icon-container' ><FaPinterest className='iconn'/></div>
                    </div>
</div>
</div>
</div>
</div>
</div>
    </div>
</div>
</div>
  )
}

export default BlogBreadSection;