'use client'
import React from 'react'
import Image from 'next/image'
import Header from "@/components/Header"
import '@/scss/cart.scss'
import BreadCrumb from "@/components/BreadCrumb"
import CartImage from '@/components/CartImg'
import { FaTimes } from 'react-icons/fa';
import Quantity from "@/components/Quantity"




export default function page() {
  return (
    <div className='cart-page' >
                   <Header />
         <BreadCrumb pageFull='Shopping cart' page='shopping cart' imageUrl='/images/blog.jpg' /> 
         
<div className="container">
    <div className='heading-container pb-3' >
        <div className='products   ' >
            <h2>Products</h2>
        </div>
        <div className="same price header ">
        <h2>Price</h2>
        </div>
        <div className='quantity header ' >
            <h2>Quantity</h2>
        </div>

        <div className="same price header ">
            <h2>Total</h2>
        </div>
        <div className="same price header "></div>
    </div>
    
    <div className='heading-container pb-3' >
        <div className='products  image-container' >
            <CartImage imageUrl='/images/banner.png' />
            <h5>Vaida hair food</h5>
        </div>
        <div className="same price header ">
        <h5>Price</h5>
        </div>
        <div className='quantity header ' >
          <Quantity />
        </div>

        <div className="same price header ">
            <h5>Total</h5>
        </div>
        <div className="same price header ">
            <h5><FaTimes size={24} /></h5>
        </div>


    </div>
</div>
      
      <div className="container">
        <div className="button-container">
            <button>CONTINUE SHOPPING</button>
            <button>UPDATE CART</button>
        </div>
        <div className="bottom-container">
            <div className="left">
            <div className="coupon-container">
            <h5>Discount Codes</h5>
            <form action="">
            <input type="text" placeholder="Enter your coupon code" />
            <button type="submit" className="site-btn">APPLY COUPON</button>
            </form>
         </div>
            </div>
            <div className="right">
            <div className="order-card card " >

<h4>Cart Total</h4>



<div className="heading-container pb-3 flex justify-between">
    <h4>Subtotal</h4>
    <h4>$450</h4>
</div>
<hr className="pt-3 " />
<div className="heading-container pt-1 flex justify-between">
    <h4>Total</h4>
    <h4 style={{color:'red'}} >$450</h4>
</div>





<button>PROCEED TO CHECKOUT</button>
</div>

            </div>

        </div>
      
      </div>
    </div>
  )
}
