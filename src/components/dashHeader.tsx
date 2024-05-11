'use client';
import '@/scss/dashHeader.scss';
import { RiMenu2Line } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import { MdNotifications } from 'react-icons/md';
import { HiMiniUsers } from 'react-icons/hi2';
import { IoSettings } from 'react-icons/io5';
import avatar from '../../public/images/avatar.jpg';
import Image from 'next/image';
import { NotificationSheet } from '@/components/NotificationSheet';
import { DropMenu } from '@/components/dropDown';

export default function dashHeader() {
  return (
    <div className="dashHeader  w-full h-20 md:h-25 lg:h25 flex z-0 flex-row justify-between items-center p-2  ">
      <div className="left flex items center gap-2 md:gap-3">
        <RiMenu2Line className="text-[2rem] cursor-pointer lg:hidden  md:text-[3rem] lg:text-[2rem]" />
        <CiSearch className="text-[2rem] cursor-pointer md:text-[3rem] lg:text-[2rem]" />
      </div>

      <div className="right flex items-center flex-row  justify-between w-[50%] md:w-[35%] lg:w-[20%] xl:w-[16%]    ">
        <div className="relative">
          <div className="count bg-red-600 top-[-8px] right-[-8px] flex h-6 absolute w-6 justify-center items-center text-white text-sm rounded-full">
            4
          </div>

          <NotificationSheet
            component={
              <MdNotifications className="text-[2rem] cursor-pointer md:text-[3rem] lg:text-[2rem]" />
            }
          />
        </div>
        <HiMiniUsers className="text-[2rem] cursor-pointer  md:text-[3rem] lg:text-[2rem]" />
        <div className="relative">
          <div className="count bg-red-600 top-[-4px] right-[-4px] flex h-2 absolute w-2 justify-center items-center text-white text-sm rounded-full"></div>
          <IoSettings className="text-[2rem] cursor-pointer md:text-[3rem] settings-icon lg:text-[2rem]" />
        </div>
        <div className="user h-[3rem] w-[3rem] lg:h-[3rem] lg:w-[3rem]  bg-black rounded-full ">
            <DropMenu component={        <Image
            src={avatar}
            className="h-[3rem] w-[3rem]  lg:h-[3rem] lg:w-[3rem] rounded-full object-cover "
            alt="avatar"
          />}
          />
        </div>
      </div>
    </div>
  );
}
