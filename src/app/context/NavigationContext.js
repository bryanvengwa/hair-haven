'use client';
import React, { createContext, useEffect, useState } from 'react';

export const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {

const [isOpen, setIsOpen] = useState(false);
const toggle = () =>{
  setIsOpen(!isOpen);
}
  return <NavigationContext.Provider value={{isOpen ,setIsOpen , toggle}} >
    {children}
    </NavigationContext.Provider>;
};
