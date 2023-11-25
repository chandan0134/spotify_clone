import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

function navbar() {
  return (
    <div className=" w-full flex justify-between bg-[#212121] ">
        <div className="flex justify-start px-4 py-3">

            <button className=" rounded-full px-3 bg-[#0A0A0A] m-2">
                <div className="text-2xl flex justify-center font-bold">
                &lt;
                </div>
            </button>

            <button className=" rounded-full px-3 bg-[#0A0A0A] m-2 ">
                <div className="text-2xl flex justify-cenetr font-bold">
                &gt;
                </div>
            </button>
            
        </div>

        <div className="flex    py-3 ">
            <button className=" rounded-full bg-white  m-2">
                <div className="px-3 font-bold text-sm lg:text-lg  text-black">
                 Explore Premium
                </div>
            </button>
            <button className=" rounded-full flex bg-[#0A0A0A] m-2">
                <div className="ml-2 py-3 ">
                <IoMdDownload />
                </div>
                <div className="p-2 mr-2 font-bold">
                 Install App
                </div>
            </button>
          

            <button className=" rounded-full text-2xl bg-[#0A0A0A] m-2 px-2 py-1">
                <div className="text-2xl">
                <MdOutlineNotificationsNone />
                </div>
            </button>
            <button className=" rounded-full text-2xl bg-[#0A0A0A] m-2">
                <div className="p-2 text-2xl">
                <FaRegUser />   
                </div>
            </button>
            

            

        </div>

    </div>
  )
}

export default navbar;