import React from 'react'
import '@/scss/departments.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Departments() {
  const [isopen, setIsOpen] = useState(false);
  function toggle(){
    setIsOpen(!isopen);
  }
  return (
        <>
          <div className='header-container ' >
          <div className='header' onClick={toggle} >
            <div>
            <FontAwesomeIcon icon={faBars} />



            </div>
            <div>
              <h2>All Departments</h2>
            </div>
            <div>
            <FontAwesomeIcon icon={faChevronDown} />
            </div>

          </div>
          <div className={`section-container ${isopen? "": "collapsed" }`} >
            <ul>
              <li>Shampo</li>
              <li>Gels & mousses</li>
              <li>Sprays</li>
              <li>Conditioners</li>
              <li>Scalp treatments</li>
            </ul>

          </div>

          </div>
        </>
  )
}
