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
    removeCartItem: any;
    instanceId : any;
    image: string;
}
// interface FormDataItem {
//     product_id: string;
//     quantity: string;
// }
export default function CartItem(  {price , title , productId, quantity , removeCartItem , instanceId, image} : CartItemProps) {
    const [value, setValue] = useState(quantity ? quantity : 0)
    const {formData, updateFormData} = useContext(CartPageContext)
    const url = 'http://127.0.0.1:8000/'
    useEffect(() => {
        setValue(quantity);
    }, [quantity]); 


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

        updateFormData(productId, value , false) ;
        
   

    },[value, productId])


  return (
    <div className='headings-container pb-3' >
    <div className='products  image-container' >
        <CartImage imageUrl={url + image?.substring(1)} />
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
        <h5 onClick={()=>removeCartItem(instanceId)} ><FaTimes size={24} /></h5>
    </div>



</div>
  )
}
