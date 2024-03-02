import React, {useState} from 'react'
import CartImage from './CartImg'
import Quantity from './Quantity'
import { FaTimes } from 'react-icons/fa';


interface CartItemProps {
    price : number;
    title: string;
}

export default function CartItem(  {price , title} : CartItemProps) {
    const [value, setValue] = useState(0)
    function decrease(){
        setValue((value)=> {
            if(value == 0) return value;
            
            return value - 1;
        })
    }
    function increase(){
        setValue((value)=> value + 1 )
    }

  return (
    <div className='heading-container pb-3' >
    <div className='products  image-container' >
        <CartImage imageUrl='/images/banner.png' />
        <h5> {title} </h5>
    </div>
    <div className="same price header ">
    <h5> $  <span  > {price} </span> </h5>
    </div>
    <div className='quantity header ' >
      <Quantity value={value} increase={increase} decrease={decrease} />
    </div>

    <div className="same price header ">
    <h5> $  <span  > {value * price} </span> </h5>
    </div>
    <div className="same price header ">
        <h5><FaTimes size={24} /></h5>
    </div>


</div>
  )
}
