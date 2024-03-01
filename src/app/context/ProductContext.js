'use client'
import React, {createContext , useEffect, useState} from "react";
import useFetch from "../../reducers/productsFetch";
import {AppUrl}from '@/utils/AppData'

export const ProductContext = createContext()

export const ProductContextProvider = function({children}){
    const url = AppUrl + 'store/products/'

const {data , error , isLoading} =  useFetch(url)


const productsData ={
    products : data,
    productsError : error,
    productLoad : isLoading,
}
console.log(url)
console.log(data, 'products')
console.log(error, 'products')
console.log(isLoading, 'products')

    return(
        <ProductContext.Provider  value={productsData} >
            {children}
        </ProductContext.Provider>
    )
}