'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"
import careImg from 'public/images/care.jpg'
import BlogBreadSection from '@/components/BlogBreadSection'
import Footer from '@/components/Footer';


export default function Page({params } :any) {

  return (
    <div>
 <Header/>

        {/* <BreadCrumb pageFull='Blog' page='Blog' imageUrl='/images/blog.jpg' /> */}
        {/* <BlogBreadSection params={params}  /> */}
        <Footer/>
    </div>
  )
}
