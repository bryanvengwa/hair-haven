'use client';
import React, { createContext, useEffect, useState } from 'react';
import { blogData } from '../../data/blogdata';


export  const BlogContext = createContext();

export const BlogContextProvider = ({children})=>{
const [randomIntArray, setRandomIntArray] = useState();
const [threeBlogs, setThreeBlogs] = useState([]);

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
    setThreeBlogs((threeBlogs)=>{
    const  array = indices.map(indice=>blogData[indice]);
        return array;
    })
  }, []); 


 const  contextData ={
    blogData,
    randomIntArray,
    threeBlogs,
};
    return(
        <BlogContext.Provider value={contextData} >
            {children}
        </BlogContext.Provider>
    )
}