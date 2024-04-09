'use client';
import React, { createContext, useEffect, useState } from 'react';
import useFetch from '../../reducers/productsFetch';
import { AppUrl } from '@/utils/AppData';

export const ProductContext = createContext();

export const ProductContextProvider = function ({ children }) {
  const url = 'http://localhost:8080/store/products';

  const { data, error, isLoading } = useFetch(url);

  console.log(data);

  const productsData = {
    products: data,
    productsError: error,
    productLoad: isLoading,
  };

  return (
    <ProductContext.Provider value={productsData}>
      {children}
    </ProductContext.Provider>
  );
};
