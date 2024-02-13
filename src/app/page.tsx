'use client'
import React from 'react'
import Departments from '@/components/Departments'
import SearchBar from '@/components/SearchBar'


export default function Home() {
  return (
    <div className='home' >
      <div className='container ' >
        <br />
      <div className=" flex-container ">
    <Departments/>
    <br />
    <br />
    <SearchBar/>
</div>

      </div>

  </div>
  )
}
