'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"

export default function page() {
  return (
    <div>
         <Header/>

         <BreadCrumb pageFull='Checkout' page='checkout' imageUrl='/images/blog.jpg' />
      
    </div>
  )
}
