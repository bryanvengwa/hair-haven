import React from 'react'
import '@/scss/checkout.scss'
import { useState } from 'react'
import { cursorTo } from 'readline';

interface QuantityProps{
    value: number;
    decrease: any;
    increase :any;
}


export default function Quantity( {value , decrease, increase  }: QuantityProps) {

  return (
    <div>
        <div className='quantity-container' >
            <div onClick={decrease} style={{cursor : value == 0 ? 'not-allowed' : 'pointer' }} className="box"> - </div>
            <div className="box">
                <input type="text" value={value} />
            </div>
            <div onClick={increase} style={{cursor : 'pointer'}}  className="box"> + </div>
        </div>
      
    </div>
  )
}
