'use client'
import React, { useContext  } from 'react';
import { CartPageContext } from '../context/CartPageContext';
import Header from "../../components/Header";
import '@/scss/cart.scss';
import BreadCrumb from "../../components/BreadCrumb";
import CartItem from '../../components/CartItem';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';



export default function page() {
    const { totalPrice , items , removeCartItem, postCartData , updateCartData} = useContext(CartContext);
    const {formData, updateFormData } = useContext(CartPageContext);
    const handleCartUpdate = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        alert(formData.length)

        
        if(formData.length > 0 ){
            formData.forEach((data : any)=> {
                const currentData = data
                alert('updating  cart with ' + data.quantity )
                postCartData(data.product_id, data.quantity)
                
            });
            updateCartData();
            updateFormData(null, null , true )
        }else{
            console.log('nothing to update')
            alert('clicked but nothing to update')
        }
       
    
      
    };
  return (
    <div className='cart-page' >
                   <Header />
         <BreadCrumb pageFull='Shopping cart' page='shopping cart' imageUrl='/images/blog.jpg' /> 
         <div className="pb-4"></div>
         
<div className="container">
    <div className='headings-container pb-3' >
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
   
    {items && items.map((item : any) =>{

        return (
            <CartItem key={item.id} productId={item.product.id} price={item.product.unit_price} instanceId={item.id} title={item.product.title} quantity={item.quantity}  removeCartItem={removeCartItem}/>
        )
    } )}


</div>
      
      <div className="container">
        <div className="button-container">
            <Link href={'/checkout'} ><button>CONTINUE SHOPPING</button></Link>
            <button onClick={handleCartUpdate}  >UPDATE CART</button>
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
    <h4>$ {totalPrice} </h4>
</div>
<hr className="pt-3 " />
<div className="heading-container pt-1 flex justify-between">
    <h4>Total</h4>
    <h4 style={{color:'red'}} >$ {totalPrice}</h4>
</div>





<Link href={'/checkout'} ><button>PROCEED TO CHECKOUT</button></Link>
</div>

            </div>

        </div>
      
      </div>
    </div>
  )
}
