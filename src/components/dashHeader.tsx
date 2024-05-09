import '@/scss/dashHeader.scss'
import { RiMenu2Line , } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdNotifications } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import avatar from '../../public/images/avatar.jpg';
import Image from 'next/image'

export default function dashHeader() {
  return (
    <div className='w-full h-20 flex flex-row justify-between items-center p-2 bg-red-50'>
        <div className="left flex items center gap-2">
        <RiMenu2Line className='text-[2rem] cursor-pointer md:text-[3rem] lg:text-[2rem]'  />
        <CiSearch className='text-[2rem] cursor-pointer md:text-[3rem] lg:text-[2rem]'  />
        </div>

        <div className="right flex items-center gap-2 lg:gap-[4rem] ">
            <div className="relative">
                <div className="count bg-red-600 top-[-8px] right-[-8px] flex h-6 absolute w-6 justify-center items-center text-white text-sm rounded-full">4</div>
            <MdNotifications className='text-[2rem] cursor-pointer md:text-[3rem] lg:text-[2rem]' />
            </div>
            <HiMiniUsers className='text-[2rem] cursor-pointer md:text-[3rem] lg:text-[2rem]'   />
            <div className="relative">
            <div className="count bg-red-600 top-[-4px] right-[-4px] flex h-2 absolute w-2 justify-center items-center text-white text-sm rounded-full"></div>
            <IoSettings className='text-[2rem] cursor-pointer md:text-[3rem] lg:text-[2rem]'   />
            </div>
            <div className="user h-8 w-8 bg-black rounded-full ">
                <Image src={avatar} className='h-8 w-8 rounded-full ' alt="avatar"/>


            </div>
            
        </div>
      
    </div>
  )
}
