import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import icon1 from "../../public/icons/icon1.png"
import icon2 from "../../public/icons/icon2.png"
import icon3 from "../../public/icons/icon3.png"
import icon4 from "../../public/icons/icon4.png"

function DescriptionTwho() {   

  return (
    <div className='max-w-[1200px] mx-auto'>
        <h1 className='text-center py-9 text-2xl'>چطور غذای خانگی سفارش بدیم؟</h1>
        <div className=' grid-cols-4 md:flex items-center md:justify-between lg:justify-between gap-3'>
            <div className='font-bold duration-300 text-center flex flex-col items-center hover:scale-105 duration-300'>
            <Image src={icon1} alt='/'/>
            <p>ثبت درخواست</p>
            <p>با ثبت درخواست در سایت، کارشناسان ما با شما در تماس خواهند بود.</p>
            </div>
            <div className='shadow-md text-center font-bold flex flex-col items-center hover:scale-105 duration-300'>
            <Image src={icon2} alt='/'/>
            <p>دریافت برنامه اختصاصی</p>
            <p>بر اساس سلیقه‌ شما، یک برنامه غذایی ویژه سازمانتان ارائه می‌کنیم.</p>
            </div>
            <div className='  shadow-md text-center font-bold flex flex-col items-center hover:scale-105 duration-300'>
            <Image src={icon3} alt='/'/>
            <p>پخت غذا با مامان‌ها</p>
            <p>مامان‌ها غذاها را با تازه‌ترین مواد اولیه آماده می‌کنند.</p>
            </div>
            <div className='shadow-md  text-center font-bold flex flex-col items-center hover:scale-105 duration-300'>
            <Image src={icon4} alt='/'/>
            <p>ارسال غذاها</p>
            <p>غذاها را طبق برنامه و در یک بسته‌بندی مناسب به دست شما می‌رسانیم.</p>
            </div>
        </div>
       <div className='flex justify-center py-9'>
        <button className='bg-red-500 p-2 w-[200px] text-white font-bold text-[20px] hover:scale-105 duration-300 rounded-lg'>اطلاعات بیشتر</button>
        </div> 
    </div>
  )
}

export default DescriptionTwho