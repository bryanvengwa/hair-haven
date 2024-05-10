
import React from 'react';
import Image from 'next/image';
import DashUsers from '@/components/dash-users';

// import bot from ';

export default function page() {
  return (
    <div className="dashboard text-textColor text-base font-medium    w-full h-full">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <div
              style={{
                background:
                  'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)',
              }}
              className="h-[30rem] md:h-[20rem] w-[100%] flex flex-col md:flex-row gap-6 items-center justify-center rounded-[15px] "
            >
              <div className="left md:pl-10 md:text-left  md:w-[50%] flex flex-col gap-3 items-center justify-center ">
                <h2 className=" text-[1.5rem] text-center md:text-left  md:text-[1.2rem] md:self-start ">
                  Welcome Back 👋🏻 
                </h2>
                <h2 className=" text-[1.5rem] text-center md:text-left  md:text-[1.2rem] md:self-start mt-[-13px]">
                   Bryan Vengwa
                </h2>

                <p className="w-70% md:w-[90%] lg:w-[90%] font-light sm:text-center  md:text-left md:self-start">
                  Checkout the latest updates from your Hair Haven store
                </p>
                <button className="border-none bg-green-700 text-white rounded-[5px]  md:self-start p-2 pl-3  pr-3">
                  Check Now
                </button>
              </div>
              <div className="right  flex flex-col items-center justify-center md:w-[50%]">
                <Image
                  src={'/images/chat-bot.png'}
                  width={300}
                  height={300}
                  className="h-[12rem]  w-[12rem] object-fit"
                  alt="bot"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-[2rem] md:mt-[0]">
            <div
              style={{
                background:
                  'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)',
              }}
              className="h-[20rem] w-[100%] rounded-[15px] "
            ></div>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <DashUsers/>

    </div>
  );
}
