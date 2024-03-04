'use client'
import React , {createContext, useState} from 'react'

export const CartpageContext = createContext();


export const CartPageContextProvider = function({children}){
    const [formData , setFormData] = useState([])
    const updateFormData = function (productId , quantity){
        setFormData((formData)=>{
            return [...formData , {product_id: productId, quantity: quantity} ]
        })
    }
    
const contextData ={
    formData,
    updateFormData,


}
    return (
        <CartpageContext.Provider value={contextData} >
            {children}
        </CartpageContext.Provider>
    )
}