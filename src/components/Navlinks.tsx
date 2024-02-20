import React from 'react'
import Link from 'next/link'

export default function Navlinks() {
  return (
<ul className='navlinks flex flex-row' >
  
    <li><Link href={'/'}>HOME</Link></li>
    <li><Link href={'/shop'}>SHOP</Link></li>
    <li>PAGES</li>
    <li><Link href={'/blog'}>BLOG</Link></li>
    <li><Link href={'/contact'}>CONTACT</Link></li>
</ul>
  )
}
