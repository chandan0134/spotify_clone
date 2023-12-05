
import Navbar from './navbar'
import Playbutton from './playbutton'
import { IoIosPlayCircle } from "react-icons/io";
import React from 'react';
import { useState } from 'react';



function Page() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoverPodcast,sethoverPodcast]=useState(null);
   const [currentSong, setCurrentSong] = useState(null);

   const songs = [
    {
      imageUrl: 'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
      title: 'Song Title 1',
      singer: 'Singer 1',
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
      title: 'Song Title 1',
      singer: 'Singer 1',
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
      title: 'Song Title 1',
      singer: 'Singer 1',
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
      title: 'Song Title 1',
      singer: 'Singer 1',
    },
    // Add more songs as needed
  ];

  const pods = [
    {
      imageUrl: 'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
      title: 'Song Title 1',
      singer: 'Singer 1',
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
      title: 'Song Title 1',
      singer: 'Singer 1',
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
      title: 'Song Title 1',
      singer: 'Singer 1',
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/cd/6c/8f/cd6c8f834fce26428e62a46d2c27357b.jpg',
      title: 'Song Title 1',
      singer: 'Singer 1',
    },
    // Add more songs as needed
  ];

  


  return (
    <div className=" ml-[41%] lg:ml-[26%] my-3 mr-3  flex flex-col w-full h-full text-white rounded-md bg-[#212121]">
        <Navbar />
        <div className=" bg-[#212121] flex-grow overflow-y-auto p-12 ">

            <div className="font-large px-4 font-bold text-3xl">
            Spotify original & exclusive podcast
            </div>
            

            <div className="py-4 px-4 flex flex-wrap gap-6">
               {songs.map((song, index) => (
                 <div
                 key={index}
                 className="flex-row w-[220px] bg-gray-800 p-4 rounded-md"
                 onMouseEnter={() => setHoveredCard(index)}
                 onMouseLeave={() => setHoveredCard(null)}
                 style={{
                   backgroundColor: hoveredCard === index ? '#1F2937' : '#000',
                 }}
                 >
                 <img
                    src={song.imageUrl}
                    alt="Card Image"
                    className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className="flex w-full">
                  <div className="w-[70%]">
                    <h2 className="flex flex-col font-bold text-white">{song.title}</h2>
                      <p className="flex flex-col text-gray-300">{song.singer}</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                  {hoveredCard === index && (
                    <button className="playButton">
                      <IoIosPlayCircle className="text-green-700" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
       
      </div>


            <div className="font-large px-4 m-3 font-bold text-3xl">
            Try something else
            </div>

            <div className="py-4 px-4 flex flex-wrap gap-6">
               {pods.map((pod, index) => (
                 <div
                 key={index}
                 className="flex-row w-[220px] bg-gray-800 p-4 rounded-md"
                 onMouseEnter={() => sethoverPodcast(index)}
                 onMouseLeave={() => sethoverPodcast(null)}
                 style={{
                   backgroundColor: hoverPodcast === index ? '#1F2937' : '#444',
                 }}
                 >
                 <img
                    src={pod.imageUrl}
                    alt="Card Image"
                    className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className="flex w-full">
                  <div className="w-[70%]">
                    <h2 className="flex flex-col font-bold text-white">{pod.title}</h2>
                      <p className="flex flex-col text-gray-300">{pod.singer}</p>
                  </div>
                  <div className="w-[30%] flex flex-row justify-end text-4xl px-2">
                  {hoverPodcast === index && (
                    <button className="playButton">
                      <IoIosPlayCircle className="text-green-700" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
       
            </div>

             

        </div>
        <Playbutton /> 

       

    </div>
  )
}

export default Page;