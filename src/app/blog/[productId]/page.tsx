'use client'
import React, { useContext, useEffect, useState } from 'react'
import Header from "@/components/Header"
import '@/scss/checkout.scss'
import BlogBreadCrub from '@/components/BlogBreadCrub'
import BlogBreadSection from '@/components/BlogBreadSection'
import Footer from '@/components/Footer'
import { BlogContext } from '@/app/context/BlogContext'


function Page({params}: any) {

  const {findById, blogData } = useContext(BlogContext);
  const [currentBlog , setCurrentBlog] = useState({});


  useEffect(()=>{
    console.log(params)
    const data = findById(params.productId);
    console.log(data)
    if (data) {
      setCurrentBlog(data)
    }
  },[params, blogData])


  return (
    <div className="blogdetails">
      <Header />
      {/* <BlogBreadCrub pageFull='blogdetails' page='pagedetails' imageUrl='/images/blog.jpg' /> */}
      <BlogBreadCrub params={params} currentBlog ={currentBlog}  />
      <BlogBreadSection params={params} />
      <Footer />
      
    </div>
  )
}

export default Page