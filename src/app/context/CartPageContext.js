'use client'
import React , {createContext, useState} from 'react'

export const CartpageContext = createContext();


export const CartPageContextProvider = function({children}){
    const [formdata , setFormData] = useState([])
    const updateFormData = function (productId , quantity){
        setFormData((formData)=>{
            return [...formData , {product_id: productId, quantity: quantity} ]
        })
    }
    
const contextData ={
    
}
    return (
        <CartpageContext.Provider>
            {children}
        </CartpageContext.Provider>
    )
}