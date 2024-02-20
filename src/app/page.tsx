'use client'
import React from 'react'
import Departments from '@/components/Departments'
import SearchBar from '@/components/SearchBar'
import Support from '@/components/Support'
import Banner from '@/components/Banner'
import Heading from '@/components/Heading'
import Tabbed from '@/components/Tabbed'
import Card from '@/components/Card'
import BlogCard from '@/components/BlogCard'



export default function Home() {
  return (
    <div className='home' >
      <div className='container ' >
        <br />
      <div className=" flex-container ">
    {/* <br /> */}
    <div className="box-container" >
    <Departments/>
    {/* <br /> */}
    <SearchBar/>
  
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
      <Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
      </div>
    </div>
  </div>
  <br /><br />

  <section className='blog-section container' >
  <Heading title='From The Blog' />
  <br />
  <br />
  <div className='blog-card-container flex gap-6 align-center justify-center ' >

      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
  </div>


  </section>



  </div>
  )
}
