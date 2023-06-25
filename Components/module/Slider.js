import React, { useEffect, useState } from 'react'

import { BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs"

import { RxDotFilled } from "react-icons/rx"

const slides=[
    {
        url:"/assets/1.jpg"
    },
    {
        url:"/assets/2.jpg"
    },
    {
        url:"/assets/3.jpg"
    }
]

function Slider() {
    const [currentIndex,setCurrentIndex]=useState(0)


    const prevState=()=>{
        const isFiraSlide=currentIndex===0
        const newIndex=isFiraSlide ? slides.length-1:currentIndex-1
        setCurrentIndex(newIndex)
    }

    const nexSlide=()=>{
        const isLastSlide=currentIndex===slides.length-1
        const newIndex=isLastSlide ? 0 :currentIndex+1
        setCurrentIndex(newIndex)
    }

    const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex)
    }


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

  return (
    <>
    <h1 className='text-center text-3xl mt-7'>شما پسندیده اید</h1>
    <div className="max-w-[900px] h-[560px] m-auto py-16 relative">
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft size={30} onClick={prevState}/>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight size={30} onClick={nexSlide}/>
        </div>
        <div className='flex justify-center'>
            {slides.map((slide,slideIndex)=>(
                <div key={slide} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer'> 
                    <RxDotFilled/>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Slider