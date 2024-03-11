'use client'
import React, {useContext, useState} from 'react';
import {BlogContext} from './context/BlogContext';
import Header from "../components/Header";
import Departments from '../components/Departments';
import SearchBar from '../components/SearchBar';
import Support from '../components/Support';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Tabbed from '../components/Tabbed';
import Card from '../components/Card';
import BlogCard from '../components/BlogCard';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Skeleton from '@mui/material/Skeleton';
import 'rsuite/dist/rsuite-no-reset.min.css';
import useFetch from '../reducers/productsFetch';





export default function Home() {
  const {data , isLoading , error } = useFetch("http://127.0.0.1:8000/store/products/");
  const {randomIntArray , blogData } = useContext(BlogContext);
  const [isActive , setIsActive ] = useState(1);
function toggler (number){
    setIsActive(number);
};



// console.log(ra)
  return (
 <>

 <Top/>
 <Header/>

 <div  className='home' >
      <div className='container ' >
        <br />
      <div className=" flex-container ">
    
    <div className="box-container" >
    <Departments/>

    <SearchBar placeholder='What do you need ?' text='Search' />
  
  <Support/>

    </div>
</div>

      </div>
      <br />
  <div className="container" >
  <div className="banner-container" >
        <div className="left-side" ></div>
        <div className="right-side" >
          <Banner/>

        </div>

      </div>

  </div>
  <br /><br />
  <Slider/>
  <br/>

  <br/>
  
  <div className="container" >
    <Heading title='Featured Product' />
  <br/>
<Tabbed toggler={toggler} isActive={isActive}  />
  </div>
  <br />
  <br />
  <br />
  <div className="container">
    <div className="row">
      <div className="card-container flex gap-4 flex-wrap align-center justify-center">

   
      {isLoading &&
            (<>
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
      
            
  
            </>
            
            )
       
      }

      {
        data && (<>
        { data.map((product  )=>{
              return <Card key={product.id} isActive={isActive} title={product.title} image={product.image} price={product.unit_price} product_id={product.id} product_type={product.product_type} />
            })}
        </>)
      }
  {error &&     <div>
        error
        </div>}

      </div>
    </div>
  </div>
  <br /><br />

  <section className='mb-10 blog-section container' >
  <Heading title='From The Blog' />
  <br />
  <br />
  <div className='blog-card-container flex flex-wrap gap-6 align-center justify-center ' >

    {randomIntArray && randomIntArray.map(int=>{
          let blog = blogData[int]
    
      return   <BlogCard key={blog.id} id={blog.id} title={blog.title1} description={blog.exercept} date={blog.date} comments={blog.comment} />


    })}

    { !randomIntArray &&  (<>
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
      
            
    </>) }
  </div>


  </section>
  <div>
    <Footer/>
    
  
   
    
 



  </div>
 </div>
 </>
 

  )
}
