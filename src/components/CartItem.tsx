import React, {useState , useContext, useEffect } from 'react'
import { CartPageContext } from '../app/context/CartPageContext';
import CartImage from './CartImg'
import Quantity from './Quantity'
import { FaTimes } from 'react-icons/fa';



interface CartItemProps {
    price : number;
    title: string;
    productId : number;
    quantity :number;
}
// interface FormDataItem {
//     product_id: string;
//     quantity: string;
// }
export default function CartItem(  {price , title , productId, quantity} : CartItemProps) {
    const [value, setValue] = useState(quantity ? quantity : 0)
    const {formData, updateFormData} = useContext(CartPageContext)

    function decrease(){
        setValue((value)=> {
            if(value == 0) return value;
            
            return value - 1;
        })
    }
    function increase(){
        setValue((value)=> value + 1 )
    }
    useEffect(()=>{

        updateFormData(productId, value);
   

    },[value])


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
