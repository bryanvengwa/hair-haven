'use client'
import React, { useContext , useState  } from 'react'
import Image from 'next/image'
import Header from "@/components/Header"
import '@/scss/cart.scss'
import BreadCrumb from "@/components/BreadCrumb"
import CartImage from '@/components/CartImg'
import { FaTimes } from 'react-icons/fa';
import Quantity from "@/components/Quantity"
import CartItem from '@/components/CartItem'
import { CartContext } from '../context/CartContext'



export default function page() {
    const {cartId , items , createdAt ,postCartData } = useContext(CartContext)

    const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        // Type-guard to ensure event.target is a form element
            let status = null;
        if (event.target instanceof HTMLFormElement) {
            const formData = new FormData(event.target);
            alert(createdAt)
            for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
                status = postCartData(key, value)
            }
            console.log(status)
            if(!status){
                alert('failed to update cart data');
            }
        } else {
            // Handle potential errors or unexpected cases
            console.error("Invalid form event target");
        }
    };
  return (
    <div className='cart-page' >
                   <Header />
         <BreadCrumb pageFull='Shopping cart' page='shopping cart' imageUrl='/images/blog.jpg' /> 
         <div className="pb-4"></div>
         
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
    <form onSubmit={ handleFormSubmission }>
    {items && items.map((item : any) =>{
        console.log(item);
        console.log(item.product.id);
        return (
            <CartItem key={item.id} productId={item.product.id} price={item.product.unit_price} title={item.product.title} quantity={item.quantity} />
        )
    } )}
    <div className="button-container">
            <button>CONTINUE SHOPPING</button>
            <button type='submit' >UPDATE CART</button>
        </div>
    </form>
</div>
      
      <div className="container">
        {/* <div className="button-container">
            <button>CONTINUE SHOPPING</button>
            <button >UPDATE CART</button>
        </div> */}
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
