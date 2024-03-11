'use client'
import React, { useContext, useEffect, useState } from 'react'
import Header from "@/components/Header"
import '@/scss/checkout.scss'
import BlogBreadCrub from '@/components/BlogBreadCrub'
import BlogBreadSection from '@/components/BlogBreadSection'
import { BlogContext } from '@/app/context/BlogContext'
import Footer from '@/components/Footer';



function Page({params}: any) {

  const {findById, blogData } = useContext(BlogContext);
  const [currentBlog , setCurrentBlog] = useState({});


  useEffect(()=>{
    const data = findById(params.productId);
    if (data) {
      setCurrentBlog(data)
    }
  },[params, blogData])


  return (
    <div className="blogdetails">
      <Header />
      {/* <BlogBreadCrub pageFull='blogdetails' page='pagedetails' imageUrl='/images/blog.jpg' /> */}
      <BlogBreadCrub params={params} currentBlog ={currentBlog}  />
      <BlogBreadSection params={params} currentBlog ={currentBlog} />
      <Footer />
      
    </div>
  )
}

export default Page