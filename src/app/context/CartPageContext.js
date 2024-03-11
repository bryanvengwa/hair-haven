'use client'
import React , {createContext, useState} from 'react'

export const CartPageContext = createContext();


export const CartPageContextProvider = function({children}){
    const [formData , setFormData] = useState([])


    const updateFormData = function (productId = null, quantity = null, reset = false) {
        if (!reset) {
            setFormData((form) => {
                let updatedFormData;
                if (form.length > 0) {
                    const existingProduct = form.find(data => data?.product_id === productId);
                    if (existingProduct) {
                        // Update the quantity of the existing product
                        updatedFormData = form.map((data) => {
                            if (data?.product_id === productId) {
                                return { ...data, quantity: quantity };
                            }
                            return data;
                        });
                    } else {
                        // Add the new product as a new entry
                        updatedFormData = [...form, { product_id: productId, quantity: quantity }];
                    }
                    // Filter out items with a quantity of 0 or less
                    // updatedFormData = updatedFormData.filter((data) => data.quantity > 0);
                } else {
                    // If there's no existing data, add a new entry
                    updatedFormData = [{ product_id: productId, quantity: quantity }];
                }
                return updatedFormData;
            });
        } else {
            // If reset is true, clear the form data
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