import React from 'react'

import Image from "next/image"

//Image
import ghaza from "../../public/icons/ghaza.jpg"

function Hero() {

  return (
    <div className='max-w-[1300px]'>
        <div className='flex-col lg:flex-row xl:flex justify-between md:ml-[14rem]'>
            <Image src={ghaza} alt='ghaza' className='rounded-[40px] md:ml-[-100px] overflow-hidden  lg:ml-[-100px] ml-[2px] py-4' width={800} height={1000}/>
            <div className='py-[7rem] flex flex-col gap-9 items-center sm:px-[-40px]'>
                <h1 className='text-3xl text-[#111] font-bold'>طعم اصیل غذای ایرانی</h1>
                <p className=' text-bold font-bold lg:px-[5rem] w-[400px] text-xl text-center'>هدف ما جلب رضایت شماست,با ما طعم اصیل غذای ایرانی را بچشید</p>
                <button className='bg-red-500 p-3 text-white font-bold rounded-xl'>میخواهم سفارش بدهم</button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero