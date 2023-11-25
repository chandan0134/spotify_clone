import React from 'react'
import { MdHomeFilled,MdSearch,MdLibraryMusic } from "react-icons/md";
import { FaPlus,FaArrowRight } from "react-icons/fa";
import Page from "./page"

function sidebar() {
  return (
    <div className=" flex bg-black w-screen h-5/6">

      <div className="  flex flex-col w-1/4 h-screen rounded-md bg-black" >

        <div className="flex flex-row h-1/6  bg-[#121212] mt-3 ml-3">
          <div className="flex w-full flex-col">
            <div className="flex h-1/2 justify-start py-2 ">
             <div className=" flex-row  text-white text-3xl px-3"><MdHomeFilled /></div>
             <div className=" flex-row   text-white text-2xl">Home</div>
            </div>
            <div className="flex   h-1/2 justify-start py-2">
             <div className="flex-row  text-white text-3xl px-3">< MdSearch/></div>
             <div className=" flex-row  text-white text-2xl">Search</div> 
            </div>
          </div>
        </div>

        <div className="flex flex-row h-5/6 ml-3 mt-3  bg-[rgb(18,18,18)]">
          <div className="flex flex-col w-full ml-3 mr-3  bg-[#121212]">
            <div className="h-[10%] flex text-white">
             <div className="justify-start py-2 flex w-[70%]">
              <div className=" flex-row text-3xl px-3"><MdLibraryMusic /></div>
              <div className=" flex-row ">Your Library</div>
             </div>
             <div className="flex justify-end py-2 px-2 w-[30%]">
              <div className="flex-row text-2xl ml-2 px-3"><button><FaPlus /></button></div>
              <div className="flex-row text-2xl "><button><FaArrowRight /></button></div>
             </div>
            </div>

            <div className="h-[25%] w-full flex flex-col justify-around  text-white  rounded-md bg-[#242424] px-4 py-2 mb-5">
              <div>
               <div className=" font-bold my-1">Create your first playlist</div>
               <div className=" font-medium my-1">It's easy,we'll help you</div>
               </div>

               <div className="w-[45%]">
                 <button className="bg-white w-full rounded-full px-2 py-1 ">
                   <div className="text-black font-bold">create playlist</div>
                 </button>
                 </div>
            </div>

            <div className="h-[25%] w-full flex flex-col justify-around  text-white  rounded-md bg-[#242424] px-4 py-2">
              <div>
               <div className=" font-bold my-1">Let's find some podcst to follow</div>
               <div className=" font-medium my-1">We will keep you updated on new music</div>
               </div>
                <div className="w-[45%]">
                 <button className="bg-white w-full rounded-full px-2 py-1 ">
                   <div className="text-black font-bold">Browse podcast</div>
                 </button>
                 </div>
            </div>

            <div className="h-[40%]  text-white"></div>

          </div>
        </div>

      </div>

      <Page/>

     

    </div>
   
  )
}

export default sidebar