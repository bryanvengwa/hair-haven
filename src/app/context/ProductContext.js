import React, {createContext} from "react";
import useFetch from "../../reducers/productsFetch";

export const ProductContext = createContext()

export const ProductContextProvider = function(){
    const url = AppUrl
    const productsURl = url + 'store/products/'
const {data , error , isLoading} =  useFetch(productsURl)



const productsData ={
    data : data,
    error : error,
    isLoading : isLoading,
}
    return(
        <ProductContext.Provider  value={productsData} >

        </ProductContext.Provider>
    )
}