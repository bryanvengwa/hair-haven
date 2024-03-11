'use client'
import React , {createContext, useState} from 'react'

export const CartPageContext = createContext();


export const CartPageContextProvider = function({children}){
    const [formData , setFormData] = useState([])


    const updateFormData = function (productId = null, quantity = null, reset = false) {
        if (!reset) {
            setFormData((form) => {
                // If reset is not true, we update the form data
                let updatedFormData;
                if (form.length > 0) {
                    // Check if the productId already exists in the form data
                    const existingProduct = form.find(data => data?.product_id === productId);
                    if (existingProduct) {
                        // If the productId exists, update its quantity
                        updatedFormData = form.map((data) => {
                            if (data?.product_id === productId) {
                                return { ...data, quantity: quantity };
                            }
                            return data; 
                            // commented out here experimental
                        })
                     return   updatedFormData = form.filter((data)=>data.quantity > 0)
                    } else {
                        // If the productId does not exist, add it as a new entry
                        updatedFormData = [...form, { product_id: productId, quantity: quantity }];
                        updatedFormData = form.filter((data)=>data.quantity < 0)

                    }
                } else {
                    // If there's no existing data, we add a new entry
                    updatedFormData = [{ product_id: productId, quantity: quantity }];
                }
                return updatedFormData;
            });
        } else {
            // If reset is true, we clear the form data
            setFormData([]);
        }
    };
    
    
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