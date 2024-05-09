import '@/scss/admin.scss';
import React from 'react';

export default function page() {
  return (
    <div className="   w-full h-full">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <div style={{background:'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)'}} className='h-[20rem] w-[100%] rounded-[15px] ' >
                  <h2>Welcome Back 👋🏻</h2>
                  <h2>Bryan Vengwa</h2>

            </div>
          </div>
          <div className="col-md-5 mt-[2rem] md:mt-[0]">
          <div style={{background:'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)'}} className='h-[20rem] w-[100%] rounded-[15px] ' >

          </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
