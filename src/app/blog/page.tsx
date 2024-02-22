'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"
import careImg from 'public/images/care.jpg'

export default function page() {
  return (
    <div>
 <Header/>

        <BreadCrumb pageFull='Blog' page='Blog' imageUrl='/images/blog.jpg' />
     
    </div>
  )
}
