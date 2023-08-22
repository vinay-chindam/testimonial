import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

export default function Testimonial(props) {
  let reviews=props.reviews
  const [index,setIndex]=useState(0)

  function leftShiftHandler(){
    if(index===0){
      setIndex(reviews.length-1)
    }
    else{
      setIndex(index-1)
    }

  }
  function rightShiftHandler(){
    if(index===reviews.length-1){
      setIndex(0)
    }
    else{
      setIndex(index+1)
    }

  }
  function surpriseHandler(){
    let ranind=Math.floor(Math.random()*reviews.length)
    setIndex(ranind)


  }
  
  return (
    <div className=' flex-col w-[85vw] md:w-[700px] bg-white flex felx-col justify-center items-center mt-10 p-10 transition-all duration-200 shadow-md'>
      <div>
      <Card review={reviews[index]}/>

      </div>

      <div>
      <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto' >
            <button className='cursor-pointer'>
                    <FiChevronLeft onClick={leftShiftHandler}/>
            </button>

            <button>
                    <FiChevronRight onClick={rightShiftHandler}/>
            </button>
        </div>
        <div >
            <button className='bg-violet-600 hover:bg-violet-800 tansiton-all duration-200 cursor-pointer  px-10 py-2 rounded-md font-bold text-white text-lg ' onClick={surpriseHandler}>
                Surprise
            </button>
        </div>

      </div>
      
      

      

    </div>

    
  )
}
