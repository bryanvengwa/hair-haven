import React, {useState} from 'react'
import CartImage from './CartImg'
import Quantity from './Quantity'
import { FaTimes } from 'react-icons/fa';


interface CartItemProps {
    price : number;
    title: string;
    productId : number;
    quantity :number;
}

export default function CartItem(  {price , title , productId, quantity} : CartItemProps) {
    const [value, setValue] = useState(quantity ? quantity : 0)
    function decrease(){
        setValue((value)=> {
            if(value == 0) return value;
            
            return value - 1;
        })
    }
    function increase(){
        setValue((value)=> value + 1 )
    }
console.log(productId)
  return (
    <div className='heading-container pb-3' >
    <div className='products  image-container' >
        <CartImage imageUrl='/images/banner.png' />
        <h5> {title} </h5>
        <input type="hidden" name="product_id" value={productId} />
    </div>
    <div className="same price header ">
    <h5> $  <span  > {price} </span> </h5>
    </div>
    <div className='quantity header ' >
      <Quantity value={value} increase={increase} decrease={decrease} />
      <input type="hidden" value={value} name='quantity'  />
    </div>

    <div className="same price header ">
    <h5> $  <span className='cart-price' > {value * price} </span> </h5>
    </div>
    <div className="same price header ">
        <h5><FaTimes size={24} /></h5>
    </div>


</div>
  )
}
