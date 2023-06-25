import React, { useEffect, useState } from 'react'

import {AiOutlineCaretDown} from "react-icons/ai";

function Description() {

  const [isMobile,setIsMobile]=useState(false);


  useEffect(()=>{
      const handelres=()=>{
        if(window.innerWidth<768){
          setIsMobile(true)
        }else{
          setIsMobile(false)
        }
      }
  
      window.addEventListener("resize",handelres)
      return()=>{
        window.removeEventListener("resize",handelres)
      }
  
      
    },[])
    

  return (
    <div className='border-b-[3px] relative py-4'>
       {!isMobile&&<div className='absolute left-[43rem] bg-gray-500 p-3 rounded-[50%] top-[10px]'>
        <AiOutlineCaretDown size={20} color='white'/>
       </div>}
    </div>
  )
}

export default Description