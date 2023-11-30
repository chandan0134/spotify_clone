
import Navbar from './navbar'
import Playbutton from './playbutton'
import { IoIosPlayCircle } from "react-icons/io";
import React from 'react';
import { useState } from 'react';



function Page() {
   const [showPlayButton, setShowPlayButton] = useState(false);
  return (
    <div className=" ml-[41%] lg:ml-[26%] my-3 mr-3  flex flex-col w-full h-full text-white rounded-md bg-[#212121]">
        <Navbar />
        <div className=" bg-[#212121] ">

            <div className="font-large px-4 font-bold text-3xl">
            Spotify original & exclusive podcast
            </div>

            <div className="py-4 px-4  flex flex-wrap gap-6 ">
              <div className="flex-row w-[220px]  bg-gray-800 p-4 rounded-md "   onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)} style={{ backgroundColor: showPlayButton ? '#1F2937' : '#444' }}>
                <img
                  src="https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg" // Replace this with the actual image URL
                  alt="Card Image"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className=" flex w-full ">
                  <div className="w-[70%]">
                    <h2 className=" flex flex-col  font-bold text-white">Song Title</h2>
                    <p className="flex flex-col text-gray-300">Singer</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                    {showPlayButton && (
                      <button className="playButton ">
                        <IoIosPlayCircle className="text-green-700" />
                      </button>
                     )}
                  </div>
                </div>
              </div>

              <div className="flex-row w-[220px]  bg-gray-800 p-4 rounded-md "   onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)} style={{ backgroundColor: showPlayButton ? '#1F2937' : '#444' }}>
                <img
                  src="https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg" // Replace this with the actual image URL
                  alt="Card Image"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className=" flex w-full ">
                  <div className="w-[70%]">
                    <h2 className=" flex flex-col  font-bold text-white">Song Title</h2>
                    <p className="flex flex-col text-gray-300">Singer</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                    {showPlayButton && (
                      <button className="playButton ">
                        <IoIosPlayCircle className="text-green-700" />
                      </button>
                     )}
                  </div>
                </div>
              </div>


              <div className="flex-row w-[220px]  bg-gray-800 p-4 rounded-md "   onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)} style={{ backgroundColor: showPlayButton ? '#1F2937' : '#444' }}>
                <img
                  src="https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg" // Replace this with the actual image URL
                  alt="Card Image"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className=" flex w-full ">
                  <div className="w-[70%]">
                    <h2 className=" flex flex-col  font-bold text-white">Song Title</h2>
                    <p className="flex flex-col text-gray-300">Singer</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                    {showPlayButton && (
                      <button className="playButton ">
                        <IoIosPlayCircle className="text-green-700" />
                      </button>
                     )}
                  </div>
                </div>
              </div>


              <div className="flex-row w-[220px]  bg-gray-800 p-4 rounded-md "   onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)} style={{ backgroundColor: showPlayButton ? '#1F2937' : '#444' }}>
                <img
                  src="https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg" // Replace this with the actual image URL
                  alt="Card Image"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className=" flex w-full ">
                  <div className="w-[70%]">
                    <h2 className=" flex flex-col  font-bold text-white">Song Title</h2>
                    <p className="flex flex-col text-gray-300">Singer</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                    {showPlayButton && (
                      <button className="playButton ">
                        <IoIosPlayCircle className="text-green-700" />
                      </button>
                     )}
                  </div>
                </div>
              </div>
            </div>

            <div className="font-large px-4 m-3 font-bold text-3xl">
            Try something else
            </div>

            <div className="py-4 px-4  flex flex-wrap gap-6 ">
              <div className="flex-row w-[220px]  bg-gray-800 p-4 rounded-md "   onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)} style={{ backgroundColor: showPlayButton ? '#1F2937' : '#444' }}>
                <img
                  src="https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg" // Replace this with the actual image URL
                  alt="Card Image"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className=" flex w-full ">
                  <div className="w-[70%]">
                    <h2 className=" flex flex-col  font-bold text-white">Song Title</h2>
                    <p className="flex flex-col text-gray-300">Singer</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                    {showPlayButton && (
                      <button className="playButton ">
                        <IoIosPlayCircle className="text-green-700" />
                      </button>
                     )}
                  </div>
                </div>
              </div>

              <div className="flex-row w-[220px]  bg-gray-800 p-4 rounded-md "   onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)} style={{ backgroundColor: showPlayButton ? '#1F2937' : '#444' }}>
                <img
                  src="https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg" // Replace this with the actual image URL
                  alt="Card Image"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className=" flex w-full ">
                  <div className="w-[70%]">
                    <h2 className=" flex flex-col  font-bold text-white">Song Title</h2>
                    <p className="flex flex-col text-gray-300">Singer</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                    {showPlayButton && (
                      <button className="playButton ">
                        <IoIosPlayCircle className="text-green-700" />
                      </button>
                     )}
                  </div>
                </div>
              </div>


              <div className="flex-row w-[220px]  bg-gray-800 p-4 rounded-md "   onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)} style={{ backgroundColor: showPlayButton ? '#1F2937' : '#444' }}>
                <img
                  src="https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg" // Replace this with the actual image URL
                  alt="Card Image"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className=" flex w-full ">
                  <div className="w-[70%]">
                    <h2 className=" flex flex-col  font-bold text-white">Song Title</h2>
                    <p className="flex flex-col text-gray-300">Singer</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                    {showPlayButton && (
                      <button className="playButton ">
                        <IoIosPlayCircle className="text-green-700" />
                      </button>
                     )}
                  </div>
                </div>
              </div>


              <div className="flex-row w-[220px]  bg-gray-800 p-4 rounded-md "   onMouseEnter={() => setShowPlayButton(true)} onMouseLeave={() => setShowPlayButton(false)} style={{ backgroundColor: showPlayButton ? '#1F2937' : '#444' }}>
                <img
                  src="https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg" // Replace this with the actual image URL
                  alt="Card Image"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className=" flex w-full ">
                  <div className="w-[70%]">
                    <h2 className=" flex flex-col  font-bold text-white">Song Title</h2>
                    <p className="flex flex-col text-gray-300">Singer</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                    {showPlayButton && (
                      <button className="playButton ">
                        <IoIosPlayCircle className="text-green-700" />
                      </button>
                     )}
                  </div>
                </div>
              </div>
            </div>
             
     

         </div>
         <Playbutton /> 

       

    </div>
  )
}

export default Page;