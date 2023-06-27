import React from 'react'
import Image from 'next/Image';
import foods from '../data';

function ShoopingPage({data}) {
    console.log(data)
    console.log();
    const {name,id,price,url}=data

    
  return (
    <div>
        <div className='border-4 p-6'>
            {/* <Image width={200} src={url.src} height={200} alt='/'/> */}

            <p className='text-center font-bold text-xl'>{name}</p>
            <div className='flex justify-center gap-1 py-2'>
                <span className='text-md font-bold text-orange-500'>ریال</span>
                <div className='flex justify-center'>
                <span className='text-md font-bold text-orange-500'>{formattedPrice}</span>
                </div>
            </div>
            <div className='flex flex-col gap-3 text-white font-bold '>
                <button className='bg-green-500 rounded-xl'>اضافه کردن</button>
                <button className='bg-red-500 rounded-xl'>حذف کردن</button>
            </div>
        </div>
    </div>
  )
}

export default ShoopingPage