import React from 'react'
import '@/scss/departments.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Departments() {
  const [isopen, setIsOpen] = useState(!false);
  function toggle(){
    setIsOpen(!isopen);
  }
  return (
        <>
          <div className='header-container ' >
          <div className='header ' onClick={toggle} >
            <div className="flex align-center gap-2 " >
            <FontAwesomeIcon icon={faBars} />



            <div>
              <h2>All Departments</h2>
            </div>

            </div>
            <div className=" flex align-center  chev justify-center">
            <FontAwesomeIcon icon={faChevronDown} className={`${isopen? "": "chevron" }`} />
            </div>

          </div>
          <div className={`section-container ${isopen? "": "collapsed" }`} >
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
