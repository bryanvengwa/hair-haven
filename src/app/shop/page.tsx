'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"
import { Carousel } from 'rsuite';
import Image from 'next/image'
import 'rsuite/dist/rsuite-no-reset.min.css';
import bannerImg from '../../../public/images/banner.png';

const SliderComponent = () => (
  <Carousel autoplay  className="custom-slider ">
    <div id="slider-container"  className=' flex items-center justify-center'  >
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>



    </div>
    <div id="slider-container"  className=' flex items-center justify-center'  >
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>



    </div>
    <div id="slider-container"  className=' flex items-center justify-center'  >
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    {/* <div id='slider-item-container flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div> */}



    </div>
    <div id="slider-container"  className=' flex items-center justify-center'  >
    <div id='slider-item-container  flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>
    <div id='slider-item-container flex items-center justify-center'  >
    <Image src={bannerImg} width={400} height={400} objectFit='cover' alt='img'/>
    </div>



    </div>

    
  </Carousel>
);



export default function page() {
  return (
    <div>
         <Header/>

        <BreadCrumb pageFull='Hair Haven Shop' page='shop' imageUrl='/images/care.jpg' />


      <SliderComponent/>
      
    </div>
  )
}
