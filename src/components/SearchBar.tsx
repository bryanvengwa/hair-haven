import React from 'react'
import '@/scss/searchbar.scss';


export default function SearchBar() {
  return (
    <>
    <div className='searchbar-container flex ' >
        <input type="search" placeholder='What do you need ?' className='g' />
        <div className='search-text g' >
            <h3>SEARCH</h3>
        </div>

    </div>
    </>
  )
}
