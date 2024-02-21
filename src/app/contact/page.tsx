'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"

export default function page() {
  return (
    <div>
        <Header />
        <BreadCrumb pageFull='Contact Us' page='Contact us' / >
      
    </div>
  )
}
