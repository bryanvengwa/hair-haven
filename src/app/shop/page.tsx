'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"
import { Carousel } from 'rsuite';
import Image from 'next/image';
import { Input, Stack} from 'rsuite';
import Card from '@/components/Card';
import 'rsuite/dist/rsuite-no-reset.min.css';
import DiscountCard from '@/components/DiscountCard';
import bannerImg from '../../../public/images/banner.png';

const SliderComponent = () => (
  <Carousel autoplay  className="custom-slider ">

    <div id="slider-container"  className=' flex items-center justify-center gap-4'   >
    <div id='slider-item-container flex items-center justify-center'  >
    <DiscountCard  discount={20} title={"Vaida Dye"} image={bannerImg} price={45} product_id={44} />
    </div>

    <div id='slider-item-container flex items-center justify-center'  >
    <DiscountCard  discount={20} title={"Vaida Dye"} image={bannerImg} price={45} product_id={44} />
    </div>

    <div id='slider-item-container flex items-center justify-center'  >
    <DiscountCard  discount={20} title={"Vaida Dye"} image={bannerImg} price={45} product_id={44} />
    </div>



    </div>
    <div id="slider-container"  className=' flex items-center justify-center gap-4'   >
    <div id='slider-item-container flex items-center justify-center'  >
    <DiscountCard  discount={20} title={"Vaida Dye"} image={bannerImg} price={45} product_id={44} />
    </div>

    <div id='slider-item-container flex items-center justify-center'  >
    <DiscountCard  discount={20} title={"Vaida Dye"} image={bannerImg} price={45} product_id={44} />
    </div>

    <div id='slider-item-container flex items-center justify-center'  >
    <DiscountCard  discount={20} title={"Vaida Dye"} image={bannerImg} price={45} product_id={44} />
    </div>



    </div>
    


    
  </Carousel>
);



export default function page() {
  return (
    <div>
         <Header/>

        <BreadCrumb pageFull='Hair Haven Shop' page='shop' imageUrl='/images/care.jpg' />
<div className="container">
<div className="shop-page">
          <div className="left">
     <h4>Departments </h4>
     <ul className='departments-list flex flex-col' >
      <li>Dye</li>
      <li>Dye</li>
      <li>Dye</li>
      <li>Dye</li>
      <li>Dye</li>
      <li>Dye</li>
      <li>Dye</li>
      <li>Dye</li>
     </ul>
     <div className="colors-container ">
      <br />
      <br />
      <h4>Colors</h4>
      <div className="sides-container flex gap-10 items-center ">
      <div className="side flex flex-col gap-3">
                <div className="flex-container flex gap-3 items-center">
        <div className="circle"></div>
        <p>White</p>
      </div>
      <div className="flex-container flex gap-3 items-center">
        <div className="circle" style={{background:'red', borderColor:'red'}} ></div>
        <p>Red</p>
      </div>
      <div className="flex-container flex gap-3 items-center">
        <div className="circle" style={{background:'blue', borderColor:"blue"}} ></div>
        <p>Blue</p>
      </div>
          </div>      
          <div className="side flex flex-col gap-3">
                <div className="flex-container flex gap-3 items-center">
        <div className="circle"  style={{background:'yellow', borderColor:"yellow"}}  ></div>
        <p>Yellow</p>
      </div>
      <div className="flex-container flex gap-3 items-center">
        <div className="circle"  style={{background:'black'}}  ></div>
        <p>Black</p>
      </div>
      <div className="flex-container flex gap-3 items-center">
        <div className="circle"  style={{background:'green', borderColor:"green"}}  ></div>
        <p>Green</p>
      </div>
          </div>
      </div>
  
     </div>
     <br />
     <br />
      <div className="tags-container">
      <h4>Search By</h4>
      <div className="blog__sidebar__item  ">
    <div className="blog__sidebar__item__tags flex flex-wrap gap-2">
        <a href="#">Apple</a>
        <a href="#">Beauty</a>
        <a href="#">Vegetables</a>
        <a href="#">Fruit</a>
        <a href="#">Healthy Food</a>
        <a href="#">Lifestyle</a>
    </div>
    </div>
      </div>
          </div>
          <div className="right">
            <div className="heading-container">
              <h2>Sale Off</h2>
            </div>
          <SliderComponent/>
          <hr />
          <div className="shop-headers flex items-center justify-between pt-2">
          <Stack spacing={10} direction="column" alignItems="flex-start">

    <Input readOnly value="Default Sort" size='md' className='input' />

   </Stack>
   <h6> <span>19</span> Products Found</h6>
          </div>
          <div className="products-container flex flex-wrap gap-4  mt-8 ">

            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />
            <Card image='/images/banner.png' title='Inecto Black Dye' price={90.00} product_id={900} />

          </div>
          </div>
        </div>

</div>
    
      
    </div>
  )
}
