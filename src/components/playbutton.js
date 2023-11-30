import React from 'react'
import { RxShuffle } from "react-icons/rx";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { TiArrowLoop } from "react-icons/ti";
import { IoIosPlayCircle } from "react-icons/io";
import { FaVolumeHigh } from "react-icons/fa6";
function playbutton() {
  return (
    <div className="fixed bottom-0 w-full bg-black h-20 bg-red flex items-center justify-content ml-20">
      <div className="py-5 flex justify-start  text-white">
        <div className="px-3 text-xl">
          <RxShuffle />
        </div>
        <div className="px-3 text-2xl">
          <IoPlaySkipBackSharp />
        </div>
        <div className="px-3 text-3xl">
          <IoIosPlayCircle />
        </div>
        <div className="px-3 text-2xl">
          <IoPlaySkipForwardSharp />
        </div>
        <div className="px-3 text-2xl">
          <TiArrowLoop />
        </div>
    
      </div>
      <div className="flex px-10  items-center justify-end text-xl">
      <FaVolumeHigh />
      </div>
     
    </div>
  );
    
  
}

export default playbutton;