import React from 'react'
import {useDispatch, useSelector} from "react-redux"

import Image from 'next/Image'

///redux
import { incrementQuantity,removeItem } from '../../Components/redux/fechuare/foodsSlice'

function index() {

  const dispatch=useDispatch()

  const shop=useSelector((state)=>state.cart.shooping)

    const foods=useSelector((state)=>state.cart.shooping)

    const totalPrice = useSelector(state => state.cart.totalPrice)

  console.log(totalPrice);
  
  const increment=(itemId)=>{
    dispatch(incrementQuantity(itemId))
  }

  const removeItems=(itemId)=>{
    dispatch(removeItem(itemId))
  }
  


  return (
    <div className='flex flex-col items-center gap-5 max-w-[1200px] mx-auto'>
      <h2 className='text-center text-2xl'>سبد خرید</h2>
        {shop.map((item)=>(
          <div className='flex flex-col items-center p-3 bg-gray-200'>
            <Image src={item.url.src} width={300} height={300} alt='/'/>
          <p>{item.name}</p>
          <div className='flex items-center bg-blue-500 text-white font-bold text-xl rounded-lg p-1'> 
            <spa>تعداد</spa>
          <p>{item.quantity}</p>
          <h2>{totalPrice}</h2>
          </div>
         <div className='flex justify-center gap-4'> 
         <button className='bg-green-500 p-2 rounded-lg text-white mt-3' onClick={()=>increment(item.id)}>+</button>
        <button className='bg-red-500 p-2 rounded-lg text-white mt-3' onClick={()=>removeItems(item.id)}>حذف از سبد خرید</button>
          </div> 
          </div>
        ))}
    </div>
  )
}

export default index