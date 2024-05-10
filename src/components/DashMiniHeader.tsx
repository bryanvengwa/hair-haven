import Link from "next/link";
import { FiPlus } from "react-icons/fi";

interface props{
    href : string;
    name: string;
}

export default function DashMiniHeader(data : props) {
  return (
    <div>
        <div className="w-full p-4" >

      <div className="flex mt-3 justify-between items-end ">
        <p className=" text-[1.5rem] md:text-[1.2rem] font-medium" >Dashboard</p>
        <Link href={data.href} >

        <button className="border-none bg-[#7fad39] text-white rounded-[7px] p-[2rem] pt-[1rem]  pb-[1rem] flex align-center gap-2 "  > <FiPlus className="text-[1rem]" />
          {data.name}
          </button>
        </Link>
      </div>
</div>
      
    </div>
  )
}
