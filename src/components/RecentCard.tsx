import React from 'react'
import Image from 'next/image';
import blogimage from '../../public/images/blog1.jpg'
import '@/scss/recentcard.scss'




function RecentCard() {
  return (
    <div>
        <a href="#" className="blog__sidebar__recent__item">
            <div className="blog__sidebar__recent__item__pic">
                <Image className='blogimage' src={blogimage} alt='blogimage' />
            </div>
            <div className="blog__sidebar__recent__item__text">
                <h6>09 Kinds Of Vegetables<br/> Protect The Liver</h6>
                <span>MAR 05, 2019</span>
            </div>
            </a>
        </div>
  )
}

export default RecentCard