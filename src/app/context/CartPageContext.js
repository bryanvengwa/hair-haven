'use client'
import React , {createContext, useState} from 'react'

export const CartPageContext = createContext();


export const CartPageContextProvider = function({children}){
    const [formData , setFormData] = useState([])
    const updateFormData = function (productId , quantity){
        setFormData((formData)=>{
            let oldFormData = [ ...formData]

            const updatedFormData = oldFormData.map((data)=>{
                if(data.productId === productId){
                    return data.quantity = quantity
                }
                
            })
            return updateFormData
        })
    }
    
const contextData ={
    formData,
    updateFormData,


}
    return (
        <CartPageContext.Provider value={contextData} >
            {children}
        </CartPageContext.Provider>
    )
}