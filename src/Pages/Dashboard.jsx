import React, { useState } from "react";
import { CiMail, CiBellOn, CiSearch } from "react-icons/ci";
import { CgMenuGridR, CgCloseR, CgHomeAlt, CgShoppingCart, CgShoppingBag, CgUserList, CgLoadbarSound, CgStyle  } from "react-icons/cg";
import { IoMdSettings, } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import user from "../assets/images/user.png";
import Line1 from "../components/Line1";
import Line2 from "../components/Line2";
import Line3 from "../components/Line3";
import Line4 from "../components/Line4";
import Barchart from "../components/Barchart";
import Table from "../components/Table";




const Dashboard = () => {
  const [menu, setMenu] = useState(true);


  const sidebad = <>

  <div className="flex flex-col h-full justify-between">

  <div className="">
  <h1 className="font-bold text-[#646464] mb-10 text-sm">Admin Panel</h1>

<h1 className="font-semibold flex items-center gap-2 mb-8 bg-[#9b92ee] py-2 pl-8 rounded-lg shadow-xl text-[#f8f8f8] "> <CgHomeAlt/> Dashboard</h1>

<h1 className="font-semibold flex items-center gap-2 mb-5 pl-2 text-[#4b4b4b]"> <CgShoppingCart/> Orders</h1>
<h1 className="font-semibold flex items-center gap-2 mb-5 pl-2 text-[#4b4b4b]"> <CgShoppingBag/> Products</h1>
<h1 className="font-semibold flex items-center gap-2 mb-5 pl-2 text-[#4b4b4b]"> <CgUserList/> Customers</h1>
<h1 className="font-semibold flex items-center gap-2 mb-5 pl-2 text-[#4b4b4b]"> <CgLoadbarSound/> Analytics</h1>
<h1 className="font-semibold flex items-center gap-2 mb-5 pl-2 text-[#4b4b4b]"> <CgStyle/> Marketing</h1>

  </div>

  <div className="">
  <h1 className="font-semibold flex items-center gap-2 mb-5 pl-2 text-[#4b4b4b]"> <IoMdSettings/> Settings</h1>
  <h1 className="font-semibold flex items-center gap-2 mb-5 pl-2 text-[#4b4b4b]"> <FiHelpCircle/> Help</h1>



  </div>
  </div>
  
  
  </>;

  return (
    <div className="relative">
      <div className="md:hidden sticky top-0 z-10">
        <div
          className={`duration-1000 absolute  max-w-[250px] w-full    shadow-2xl ${
            !menu ? "top-0 left-0 " : "top-0 left-[-1000px] bottom-0 "
          }`}
        >
         
          <div className=" h-screen bg-[#ebf0ff]  ">
          <div className="  px-5 pt-20  ">{sidebad}</div>
          </div>
          
        </div>
      </div>

      <div className="flex items-start ">
        <div className=" hidden md:block max-w-[250px] w-full h-screen sticky top-0 bg-[#ebf0ff] px-5 pt-20  overflow-y-auto">
          {sidebad}
        </div>
        <div className="w-full mx-4">
          <div className="flex items-center justify-between p-4 gap-2 pt-8">
            <div className="w-full max-w-[400px] relative flex items-center gap-5">
              
              <input
                className="border-2 rounded-xl p-2 w-full  "
                type="text"
                placeholder="Search Dashboard"
              />
              <CiSearch className="w-[30px] h-[25px] absolute top-[11px] right-4 text-[#d1d1d1] " />
            </div>

            <div className="flex items-center gap-3">
              <span
                className="p-2
                             bg-[#e6e6e6] rounded-full relative transform transition duration-500 hover:scale-105 hover:shadow-lg"
              >
                <CiMail className="w-[25px] h-[25px] " />{" "}
                <p className="bg-[#8194fd] h-[10px] w-[10px] rounded-full top-2 right-1 absolute"></p>
              </span>
              <span
                className="p-2
                             bg-[#e6e6e6] rounded-full transform transition duration-500 hover:scale-105 hover:shadow-lg"
              >
                <CiBellOn className="w-[25px] h-[25px] " />
              </span>
              <img className="w-[38px] h-[38px] " src={user} alt="" />
              <div
                onClick={() => setMenu(!menu)}
                className="block md:hidden z-20 text-[#9b92ee]"
              >
                {menu ? (
                  <CgMenuGridR className="w-[40px] h-[40px]" />
                ) : (
                  <CgCloseR className="w-[40px] h-[40px]" />
                )}
              </div>
            </div>
          </div>

           <div className="px-4 py-10  sm:block justify-center">
            <div className="">
               {/* Content start */}




            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-y-6 gap-x-6">
            <Line1/> <Line2/>
            <Line3/> <Line4/>
            </div>

            <div className=" mt-8">
              <Barchart/>
            </div>

            <div className="mt-8">
              <Table/>
            </div>








  {/* Content end */}
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
