import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navlinks() {
  const [open , isOpen] = useState(true)
  function toggle (){
    isOpen((!open))
  }
  return (
<ul className='navlinks flex flex-row' >
  
    <li><Link href={'/'}>HOME</Link></li>
    <li><Link href={'/shop'}>SHOP</Link></li>
    <li onClick={toggle} className='drop' >PAGES

      <ul className={`drop-down ${open ? 'hide-element' : '' } `} >
        <li> <Link href={'/cart'}  >Shopping cart </Link></li>
        <li> <Link href={'/checkout'}   >Checkout  </Link></li>
        <li> <Link href={'/blog/details'}   >Blog Details </Link></li>
        <li> <Link href={'/shop/details'}   >Shop Details  </Link></li>
      </ul>
    </li>

    <li><Link href={'/blog'}>BLOG</Link></li>
    <li><Link href={'/contact'}>CONTACT</Link></li>
</ul>
  )
}
