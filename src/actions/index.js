'use client'
// import AppUrl from './utils/AppData'

import React from 'react';

// pages/api/getData.js
export async function getData() {
    const response = await fetch("http://127.0.0.1:8000/store/products/");
    const data = await response.json();
    return data;
  }
  