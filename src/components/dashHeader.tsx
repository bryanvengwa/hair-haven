import '@/scss/dashHeader.scss'
import { RiMenu2Line , } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdNotifications } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { Avatar, Space } from 'antd';

export default function dashHeader() {
  return (
    <div className='w-full h-20 flex flex-row justify-between items-center p-2'>
        <div className="left flex items center gap-2">
        <RiMenu2Line size={30} />
        <CiSearch size={30} />
        </div>

        <div className="right flex items-center gap-2 ">
            <div className="relative">
                <div className="count bg-red-600 right-0 flex h-6 absolute w-6 justify-center items-center text-white text-sm rounded-full">4</div>
            <MdNotifications size={30} className=''  />
            </div>
            <HiMiniUsers size={30}  />
            <div className="relative">
            <div className="count bg-red-600 right-0 flex h-2 absolute w-2 justify-center items-center text-white text-sm rounded-full"></div>
            <IoSettings  size={30} />
            </div>
            <div className="user h-8 w-8 bg-black rounded-full ">


            </div>
            
        </div>
      
    </div>
  )
}
