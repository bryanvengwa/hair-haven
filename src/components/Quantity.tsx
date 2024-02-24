import React from 'react'
import '@/scss/checkout.scss'
import { useState } from 'react'

export default function Quantity() {
    const [value, setValue] = useState(0)
    function decrease(){
        setValue((value)=> value - 1 )
    }
    function increase(){
        setValue((value)=> value + 1 )
    }
  return (
    <div>
        <div className='quantity-container' >
            <div onClick={decrease} className="box"> - </div>
            <div className="box">
                <input type="text" value={value} readOnly />
            </div>
            <div onClick={increase}  className="box"> + </div>
        </div>
      
    </div>
  )
}
