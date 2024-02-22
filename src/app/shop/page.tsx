'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"

export default function page() {
  return (
    <div>
         <Header/>

        <BreadCrumb pageFull='Hair Haven Shop' page='shop' imageUrl='/images/care.jpg' />
      
    </div>
  )
}
