import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'


function Footer() {
  return (
    <div className='bg-grey-100 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
            <ul>
                <p className='text-grey-800 font-bold text-3xl pb-6'>
                  {/* Hair <span className='text-green-600'>Haven</span>   */}
                  <Image src={Logo} alt='Logo' />
                </p>
                <div className='flex gap-6 pb-5'>
                    {/* SECTION FOR ICONS */}
                    {/* <faHeart className=/> */}

                </div>
            </ul>
        </div>
        <div className="p-5">
            <ul>
                <p className="text-gray-800 -font-bold text-2xl pb-4">Product</p>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>

            </ul>
        </div>
        <div className="p-5">
        <ul>
                <p className="text-gray-800 -font-bold text-2xl pb-4">Product</p>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>

            </ul>
        </div>
        <div className="p-5">
        <ul>
                <p className="text-gray-800 -font-bold text-2xl pb-4">Product</p>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 curser-pointer">Product</li>

            </ul>
        </div>
    </div>
  )
}

export default Footer
