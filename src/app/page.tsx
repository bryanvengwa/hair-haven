'use client'
import React from 'react'
import Departments from '@/components/Departments'
import SearchBar from '@/components/SearchBar'
import Support from '@/components/Support'
import Banner from '@/components/Banner'
import Heading from '@/components/Heading'
import Tabbed from '@/components/Tabbed'
import Card from '@/components/Card'



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
  <div className="container" >
    <Heading/>
  <br/>
<Tabbed/>
  </div>

<Card/>

  </div>
  )
}
