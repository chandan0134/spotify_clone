import './App.css';

function App() {
  return (
    <div className=" flex bg-black w-screen h-5/6">

      <div className="  flex flex-col w-1/4 h-screen rounded-md bg-black" >

        <div className="flex flex-row h-1/6  bg-[#121212] mt-3 ml-3">
          <div className="flex flex-col">
            <div className="h-1/2 text-white">Home</div>
            <div className="h-1/2 text-white">Search</div>
          </div>
        </div>

        <div className="flex flex-row h-5/6 ml-3 mt-3  bg-[#121212]">
          <div className="flex flex-col w-full ml-3 mr-3  bg-[#121212]">
            <div className="h-[10%]  text-white">Your Library</div>
            <div className="h-[30%]  text-white  rounded-md bg-[#242424] mb-1.5">Search</div>
            <div className="h-[30%]  text-white  rounded-md bg-[#242424] mt-1.5">Search</div>
            <div className="h-[30%]  text-white">Search</div>

          </div>
        </div>

      </div>

      <div className="mt-3 mr-3 ml-3 mb-3 flex flex-col w-3/4 h-screen rounded-md bg-[#121212]">

      </div>

     

    </div>
   
  );
}

export default App;
