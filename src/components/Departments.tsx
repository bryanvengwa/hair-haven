import React from 'react'
import '@/scss/departments.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Departments() {
  const [isopen, setIsOpen] = useState(true);
  function toggle(){
    setIsOpen(!isopen);
  }
  return (
        <>
          <div className='header-container ' >
          <div className='headers'  onClick={toggle} >
            <div className="flex align-center gap-2 " >
            <FontAwesomeIcon icon={faBars} />



            <div>
              <h2>All Departments</h2>
            </div>

            </div>
            <div className=" flex align-center  chev justify-center">
            <FontAwesomeIcon icon={faChevronDown} className={`${isopen? "chevron": "" } ${!isopen? "chevron2": "" } `} />
            </div>

          </div>
          <div className={`section-container ${isopen? "collapsed": "" } section-container ${!isopen? "collapsed2": "" } `} >
            <ul>
              <li>Shampo</li>
              <li>Gels & mousses</li>
              <li>Sprays</li>
              <li>Conditioners</li>
              <li>Scalp treatments</li>
              <li>Shampo</li>
              <li>Gels & mousses</li>
              <li>Sprays</li>
              <li>Conditioners</li>
              <li>Scalp treatments</li>
              <li>Sprays</li>
              <li>Conditioners</li>
              
            </ul>

          </div>

          </div>
        </>
  )
}
