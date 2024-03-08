'use client';
import React, { createContext, useEffect, useState } from 'react';
import { blogData } from '../../data/blogdata';


const BlogContext = createContext();

const BlogContextProvider = ({children})=>{
const [randomIntArray, setRandomIntArray] = useState();

function getRandomIndices(arrayLength) {
    const indices = [];
    while (indices.length < 3) {
      const randomNumber = Math.floor(Math.random() * arrayLength);
      if (!indices.includes(randomNumber)) {
        indices.push(randomNumber);
      }
    }
    return indices;
  }
  

useEffect(() => {
    const indices = getRandomIndices(blogData.length);
    setRandomIntArray(indices);
  }, [blogData]); 


contextData ={
    blogData,
    randomIntArray,
}
    return(
        <BlogContext.Provider value={contextData} >
            {children}
        </BlogContext.Provider>
    )
}