import React from 'react'
import '@/scss/searchbar.scss';

interface barProps{
  placeholder: string;
  text : string;
}

export default function SearchBar({placeholder, text}: barProps) {
  return (
    <>
    <div className='searchbar-container flex ' >
        <input type="search" placeholder={placeholder} className='g' />
        <div className='search-text g' >
            <h3 style={{textTransform:'uppercase'}} >{text}</h3>
        </div>

    </div>
    </>
  )
}
