import React from 'react'
import Link from 'next/link'

export default function Navlinks() {
  return (
<ul className='navlinks flex flex-row' >
  
    <li><Link href={''}>HOME</Link></li>
    <li><Link href={''}>SHOP</Link></li>
    <li>PAGES</li>
    <li><Link href={''}>BLOG</Link></li>
    <li><Link href={''}>CONTACT</Link></li>
</ul>
  )
}
