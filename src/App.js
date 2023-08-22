import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";


const App = () => {
  return (
    <div className="bg-gray-600  w-screen h-screen ">

<div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center items-center overflow-y-auto py-16 ">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Our Testimonial</h1>
    </div>
    <div>

    </div>

    <div className="bg-violet-400 h-[4px] w-[1/5] mt-1">
    <Testimonial reviews={reviews}/>
      
    </div>

    

  </div>


    </div>
    
    
  
  )
};

export default App;
