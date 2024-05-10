import { BsGraphUpArrow } from 'react-icons/bs';
import { PiUsersThreeFill } from 'react-icons/pi';

export default function DashUsers() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="dash-card1 flex flex-col justify-evenly relative w-full h-[10rem]  text-black rounded-[15px] shadow pl-3">
              <h4 className="capitalize">Total New Users</h4>
              <div className="flex gap-2 items-center ">
                <BsGraphUpArrow className="text-[1,5rem] text-green-700" />
                <p>2.6 %</p>
              </div>

              <h2 className="font-bold text-[1.8rem]">18,765</h2>
              <PiUsersThreeFill
                size={70}
                className="absolute right-5 top-[25%] "
              />
            </div>
          </div>
          <div className="col-md-4 mt-[2rem] md:mt-[0]">
            <div className="dash-card1 flex flex-col justify-evenly relative w-full h-[10rem]  text-black rounded-[15px] shadow pl-3">
              <h4 className="capitalize">Total New Users</h4>
              <div className="flex gap-2 items-center ">
                <BsGraphUpArrow className="text-[1,5rem] text-green-700" />
                <p>2.6 %</p>
              </div>

              <h2 className="font-bold text-[1.8rem]">18,765</h2>
              <PiUsersThreeFill
                size={70}
                className="absolute right-5 top-[25%] "
              />
            </div>
          </div>
          <div className="col-md-4 mt-[2rem] md:mt-[0]">
            <div className="dash-card1 flex flex-col justify-evenly relative w-full h-[10rem]  text-black rounded-[15px] shadow pl-3">
              <h4 className="capitalize">Total Active Users</h4>
              <div className="flex gap-2 items-center ">
                <BsGraphUpArrow className="text-[1,5rem] text-green-700" />
                <p>2.6 %</p>
              </div>

              <h2 className="font-bold text-[1.8rem]">18,765</h2>
              <PiUsersThreeFill
                size={70}
                className="absolute right-5 top-[25%] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
