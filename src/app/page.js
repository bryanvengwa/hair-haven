'use client'
import React, {useContext} from 'react'
import {BlogContext} from './context/BlogContext'
import Header from "../components/Header"
import Departments from '../components/Departments'
import SearchBar from '../components/SearchBar'
import Support from '../components/Support'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import Tabbed from '../components/Tabbed'
import Card from '../components/Card'
import BlogCard from '../components/BlogCard'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Top from '../components/Top'
import Skeleton from '@mui/material/Skeleton';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Carousel } from 'rsuite';
import useFetch from '../reducers/productsFetch';
import bannerImg from '../../public/images/banner.png';
import Image from 'next/image';

const SliderComponent = () => (


  <Carousel autoplay  className="custom-slider ">

    <div id="slider-container"  className=' flex items-center justify-center'  >
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>



    </div>
    <div id="slider-container"  className=' flex items-center justify-center'  >
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>



    </div>
    <div id="slider-container"  className=' flex items-center justify-center'  >
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>



    </div>



    
  </Carousel>
);




export default function Home() {
  const {data , isLoading , error } = useFetch("http://127.0.0.1:8000/store/products/")
  const {randomIntArray , blogData } = useContext(BlogContext);


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
  <div className='container' >
  <SliderComponent/>


  </div>
  <br/>
  
  <div className="container" >
    <Heading title='Featured Product' />
  <br/>
<Tabbed/>
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
              return <Card key={product.id} title={product.title} image={product.image} price={product.unit_price} product_id={product.id} />
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

  <section className='blog-section container' >
  <Heading title='From The Blog' />
  <br />
  <br />
  <div className='blog-card-container flex flex-wrap gap-6 align-center justify-center ' >

    {randomIntArray && randomIntArray.map(int=>{
          let blog = blogData[int]
    
      return   <BlogCard title={blog.title1} description={blog.exercept} date={blog.date} comments={blog.comment} />


    })}
  </div>


  </section>
  <div>
    <Footer/>
    
  
   
    
 



  </div>
 </div>
 </>
 

  )
}
