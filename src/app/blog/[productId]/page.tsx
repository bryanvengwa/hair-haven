'use client'
import React from 'react'
import Header from "@/components/Header"
import '@/scss/checkout.scss'
import BlogBreadCrub from '@/components/BlogBreadCrub'
import BlogBreadSection from '@/components/BlogBreadSection'
import Footer from '@/components/Footer'

function Page({params}: any) {
  return (
    <div className="blogdetails">
      <Header />
      {/* <BlogBreadCrub pageFull='blogdetails' page='pagedetails' imageUrl='/images/blog.jpg' /> */}
      <BlogBreadCrub params={params} />
      <BlogBreadSection params={params} />
      <Footer />
      
    </div>
  )
}

export default Page