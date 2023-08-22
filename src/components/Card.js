import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'



export default function Card(props) {
    let review=props.review
    

    
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem]  mx-auto2 ' >
                <img 
                className='aspect-square rounded-full w-[150px] h-[150px] z-25'
                src={review.image} alt='nothing'/>
                <div className='w-[150px] h-[150px] bg-voilet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]'>

                </div>
        </div>

        <div className='text-center mt-8'>
            <p className='font-bold capitalize text-2xl'>{review.name}</p>
        </div>

        <div className='text-center mt-6'>
            <p className='text-violet-700 uppercase'>{review.job}</p>
        </div>

        <div className='text-violet-600 mx-auto mt-6'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center mt-4  text-slate-800'> 
            {review.text}
        </div>

        <div className='text-violet-600 mx-auto mt-6'>
            <FaQuoteRight/>
        </div>

        

    
    </div>
  )
}
