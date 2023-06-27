import React from 'react'
import {useRouter} from "next/router"
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/Image';
import foods from '../../Components/data';

import {AiOutlineArrowLeft} from "react-icons/ai";
import Link from 'next/Link';

//Redux
import { addItem,removeItem } from '../../Components/redux/fechuare/foodsSlice';

function Detailse() {
  const dispatch=useDispatch()


  const router=useRouter();
  const {fodId}=router.query
  
  const foodsId=foods[fodId-1]
  const {name,url,price}=foodsId

  const handleAddToCart = () => {
    dispatch(addItem(foods));
  };


  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex justify-center relative'>
      <Image src={url.src} alt='/' width={400} className='rounded-lg' height={400}/>
      </div>
      <Link href={"/"}>
      <div className='absolute top-[160px] left-3 bg flex flex-col items-center bg-blue-600 p-1 text-white font-bold text-[15px] rounded-xl'>
        <button>برگشت به فروشگاه</button>
        <AiOutlineArrowLeft/>
      </div>
      </Link>
      <div className='flex justify-center py-4 text-2xl'><span className='bg-yellow-500 p-2 rounded-lg text-red-500 font-bold'>{name}</span></div>
      <div className='flex items-center justify-center'><span className='bg-green-600 text-white font-bold rounded-lg p-2'><span className='font-bold rounded-lg p-2 text-xl'>ریال</span>{price}</span></div>
      <div className='flex justify-center'>
      <button className='bg-green-500 w-[300px] mt-4 p-2 text-xl text-white font-bold rounded-lg hover:scale-105 duration-300' onClick={handleAddToCart}>اضافه کردن به سبد خرید</button>
      </div>
      <div className='flex justify-center py-6'>
      </div>
    </div>
  )
}

export default Detailse