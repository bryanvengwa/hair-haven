'use client'
import React, { createContext, useEffect, useState } from 'react';


export  const BlogContext = createContext<boolean>(false);

const [isOpen, setIsOpen] = useState(false);
