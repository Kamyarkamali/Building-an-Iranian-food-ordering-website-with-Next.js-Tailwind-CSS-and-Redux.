import React from 'react'
import {useSelector} from "react-redux"

import ShoppingPage from "../../Components/templates/ShoopingPage"

function index() {

  const shop=useSelector((state)=>state.cart.shooping)

console.log(shop)
  
  
  

  return (
    <div className='flex flex-col items-center gap-5 max-w-[1200px] mx-auto'>
      <h2 className='text-center text-2xl'>سبد خرید</h2>
        {shop.map((item)=>(
          <p>{item.name}</p>
        ))}
    </div>
  )
}

export default index