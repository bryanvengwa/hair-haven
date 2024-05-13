'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FaFacebook,
  FaPinterest,
  FaEnvelope,
  FaUser,
  FaLinkedinIn,
} from 'react-icons/fa';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

import Link from 'next/link';
import { UseRetrieveAuth } from '@/utils/AuthStorage';
import { useEffect } from 'react';
export default function Top() {
  useEffect(() => {}, []);
  UseRetrieveAuth();

  const authInfo = useSelector((state: RootState) => state.auth);
  console.log(authInfo);
  return (
    <div className="top ">
      <div className="container flex items-center  justify-between ">
        <div className="leftie flex gap-2">
          <FaEnvelope />
          <a href="">hellof@hairhaven.com</a>
          <div className="line"></div>
          <p>Free shipping for all order of $99</p>
        </div>
        <div className="rightie flex items-center gap-1">
          <div className="icon-contianer flex gap-3 items-center justify-center ">
            <FaFacebook />
            <FaLinkedinIn />
            <FaPinterest />
            <div>
              <div></div>
            </div>
          </div>
          {/* <div className="line"></div> */}
          <div className="country-container flex items-center gap-3">
            <div className="line"></div>
            <p className=" text-3xl">🇺🇸</p>
            <p>English</p>
            <FontAwesomeIcon icon={faChevronDown} />
            <div className="line"></div>
          </div>
          <div className="login-container flex items-center gap-1">
            <FaUser />
            {authInfo.user == null ? (
              <Link href={'/login'}>{'Login'}</Link>
            ) : (
              <Link href={''}> {authInfo.user.userName} </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
