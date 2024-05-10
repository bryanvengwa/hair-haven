import { FiPlus } from "react-icons/fi";

export default function Page() {
  return (
    <div>
<div className="w-full p-3" >
<h2 className="text-black capitalise" >List</h2>
      <div className="flex mt-3 justify-between items-end bg-red-500">
        <p className="text-[1.2rem] font-medium" >Dashboard</p>
        <button className="border-none bg-[#7fad39] text-white rounded-[7px] p-[2rem] pt-[1rem]  pb-[1rem] flex align-center gap-2 "  > <FiPlus className="text-[1rem]" />  New Product </button>
      </div>
</div>
    </div>
  )
}
