import { SelectInput } from './selectInput';
import { HiTrash } from 'react-icons/hi2';
import { IoMdEye } from 'react-icons/io';
import { CgExport } from 'react-icons/cg';

export default function ListItems() {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-3 items-center md:flex-wrap  ">
        <div className='flex flex-col md:flex-row gap-3 w-full md:flex-1'>
        <SelectInput />
        <SelectInput />
        <SelectInput />
        </div>

        <div className='flex justify-end items-center self-start  gap-3 text-black lg:self-auto md:ml-auto xl:ml-0'>
        <div className='flex items-center gap-1' >
          <HiTrash className='text-[1rem] text-red-600' /> <p className='text-red-600' >Delete (20)</p>
        </div>
        <div  className='flex items-center gap-1' >
          <IoMdEye /> <p>Columns</p>
        </div>
        <div  className='flex items-center gap-1' >
          <CgExport /> <p>Export</p>
        </div>
      </div>
      </div>

      <DataTable />
  
    </div>
  );
}
