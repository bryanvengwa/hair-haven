'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"
import { Carousel } from 'rsuite';
import Image from 'next/image'
import bannerImg from '../../../public/images/banner.png';

const SliderComponent = () => (
  <Carousel autoplay className="custom-slider">
    <Image src={bannerImg} height="250"  alt='img'/>
    <Image src={bannerImg} height="250"  alt='img'/>
    <Image src={bannerImg} height="250"  alt='img'/>
    <Image src={bannerImg} height="250"  alt='img'/>
    <Image src={bannerImg} height="250"  alt='img'/>
  </Carousel>
);



export default function page() {
  return (
    <div>
         <Header/>

        <BreadCrumb pageFull='Hair Haven Shop' page='shop' imageUrl='/images/care.jpg' />

<h1>here is </h1>
      <SliderComponent/>
      
    </div>
  )
}
