'use client'
import React from 'react'
import Header from "@/components/Header"
import Departments from '@/components/Departments'
import SearchBar from '@/components/SearchBar'
import Support from '@/components/Support'
import Banner from '@/components/Banner'
import Heading from '@/components/Heading'
import Tabbed from '@/components/Tabbed'
import Card from '@/components/Card'
import BlogCard from '@/components/BlogCard'
import Slider from '@/components/Slider'
import Footer from '@/components/Footer'
import Top from '@/components/Top'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


export default function Home() {
  const loading = true

  return (
 <>

 <Top/>
 <Header/>
 <div className='home' >
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

   
      {loading ?
            (<>
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rectangular" width={310} height={250} />
      
            
  
            </>
            
            ): <h1>ni</h1>
       
      }


      </div>
    </div>
  </div>
  <br /><br />

  <section className='blog-section container' >
  <Heading title='From The Blog' />
  <br />
  <br />
  <div className='blog-card-container flex flex-row flex-wrap gap-6 align-center justify-center ' >

      <BlogCard title='Your Guide to Smoother, Sleeker Hair' description='Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat' date='May 4,2019' comments={5}  />
      <BlogCard title='Your Guide to Smoother, Sleeker Hair' description='Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat' date='May 4,2019' comments={5}  />
      <BlogCard title='Your Guide to Smoother, Sleeker Hair' description='Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat' date='May 4,2019' comments={5} />
   
  </div>


  </section>
  <div>
    <Footer/>
    
  
   
    
  <div className="container">
    
    {/* <Footer/> */}
  </div>



  </div>
 </div>
 </>
 

  )
}
