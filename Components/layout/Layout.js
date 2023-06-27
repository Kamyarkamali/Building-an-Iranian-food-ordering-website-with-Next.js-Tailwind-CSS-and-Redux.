import React, { useEffect, useState } from 'react'
import Link from "next/Link"
import Image from 'next/Image';

//Labale
import resturan from "../../public/assets/restoran.jpg";
import namad from "../../public/assets/namad.png"
import instagram from "../../public/icons/instagram.png"
import github from "../../public/icons/githoub.png"
import linkdin from "../../public/icons/linkdin.png"

///Icons
import {BsBag} from "react-icons/bs"
import { BsList } from 'react-icons/bs';
import {FiInstagram} from "react-icons/fi";
import {IoLogoLinkedin} from "react-icons/io"
import { FiMapPin } from 'react-icons/fi';

///Redux
import { useSelector } from 'react-redux';


function Layout({children}) {
  const [isMobile,setIsMobile]=useState(false);
  const [open,setIsOpen]=useState(false);

  ///redux
  const shop=useSelector((state)=>state.cart.shooping)


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
  
  const openHamdeler=()=>{
    setIsOpen(!open)
  }
  return (
    <>
    <header>
      <div className='flex justify-between  p-[12px] items-center bg-orange-500 max-w-[1419px] mx-auto'>
        <div className='flex flex-col items-center'>
          <p className='text-2xl text-white'>با ما در تماس باشید</p>
          <p className='font-bold py-3 text-yellow-300 text-xl'>021-44444444</p>
        </div>
        <div>
          {!isMobile&& (
            <div className='flex gap-4 text-white font-bold'>
              <Link href={"/singup"}>
              <button className='bg-red-500 p-2 rounded-lg font-bold text-white'>ثبت نام / ورود</button>
              </Link> 
            </div>
          )
          
          }
        </div>
        {!isMobile&&<div className='relative'>
          <Link href={"/shoop"}>
          <BsBag size={20} color='blue'/>
          <span className='absolute top-[-10px] bg-red-500 p-[2px] h-[27px] w-[15px] text-center rounded-[50%] right-[-11px] text-white'>{shop.length}</span>
          </Link>
        </div>}
        <div className='relative'>
          {!isMobile ?<Link href={"/"}>
          <Image src={resturan} alt='resurant' width={60} height={60} className='rounded-[50%] object-cover'/>
          </Link> : <BsList onClick={openHamdeler} size={30} className='cursor-pointer'/>}
          {isMobile&&<div className={open ? 'absolute bg-orange-600 p-[4px] text-white font-bold right-[-14px] rounded-xl w-[200px] h-screen duration-300' : "absolute bg-orange-600 p-[4px] text-white font-bold right-[700px] rounded-xl w-[200px] h-screen duration-300"}>
            <ul className='flex flex-col items-center p-4'>
              <Link href={"/"}>
              <li className='py-6 hover:scale-105 duration-300 cursor-pointer'>صفحه اصلی</li>
              </Link>
              <li className='py-6 hover:scale-105 duration-300 cursor-pointer'>سبد خرید</li>
              <Link href={"/foods"}>
              <li className='py-6 hover:scale-105 duration-300 cursor-pointer'>تمام غذاها</li>
              </Link>
              <li className='py-6 hover:scale-105 duration-300 cursor-pointer'>درباره ما</li>
              <li className='py-6 hover:scale-105 duration-300 cursor-pointer'> تماس با ما</li>
            </ul>
            <div className='flex justify-center gap-6'>
              <button className='bg-green-600 p-1 rounded-xl'>ورود</button>
              <button className='bg-blue-600 p-1 rounded-xl'>ثبت نام</button>
            </div>
            <div className='flex items-center py-4 flex-col'>
              <FiMapPin className='ml-[8rem]'/>
              <p className='text-sm py-2 font-bold text-blue-300'>تهران,شهرک غرب,ایران زمین</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>:با ما همراه باشید</p>
              <div className='flex py-4 gap-3'>
                <FiInstagram size={24} className='cursor-pointer'/>
                <IoLogoLinkedin size={24} color='blue' className='cursor-pointer'/>
              </div>
            </div>
          </div>}
        </div>
      </div>
      {!isMobile&&<div className='bg-yellow-400 text-white font-bold p-1'>
        <ul className='flex justify-between'>
          <li className='cursor-pointer hover:scale-105 duration-300'>تماس با ما</li>
          <li className='cursor-pointer hover:scale-105 duration-300'>درباره ما</li>
          <Link href={"/foods"}>
          <li className='cursor-pointer hover:scale-105 duration-300'>غذاها</li>
          </Link>
          <Link href={"/"}>
          <li className='cursor-pointer hover:scale-105 duration-300'>صفحه اصلی</li>
          </Link>
        </ul>
      </div>}
    </header>

      <div className='min-h-[1000px]'>{children}</div>

    <div className='bg-[#eeee] p-3 flex justify-between'>
      <div className='py-[4rem]'>
        <Image src={namad} alt='namad' width={70} height={30}/>
      </div>
      <div>
          <h1 className='text-xl'>خدمات مشتریان</h1>
          <div className='flex flex-col items-center gap-3'>
            <span>درباره ما</span>
            <span>تماس با ما</span>
            <span>تماس با ما</span>
            <span>ثبت شکایت</span>
            <span>سوالات متداول</span>
            <span>قوانین</span>
          </div>
      </div>

      <div className='flex flex-col items-center text-sm gap-3'>
       <span>غذاها</span>
        <span>آشپزان</span>
        <span>سفارشات شرکتی</span>
        <span>عضوی از ما باشید</span>
        <span>وبلاگ</span>  
        <span className='bg-[#333] rounded-lg p-3 text-white font-bold'>
          <button>رستوران در موبایل</button>
        </span>
      <div className='flex items-center gap-3'>
        <Image width={30} height={40} alt='instagram' src={instagram}/>
        <Image width={30} height={40} alt='linkdin' src={linkdin}/>
        <Image width={30} height={40} alt='githob' src={github}/>
      </div>
      </div>
    </div>
    <div className='bg-gray-500'>
      <p className='text-center text-white text-bold text-xl p-3'>این صفحه صرفا جهت دیدن نمونه کار توسط اینجانب طراحی شده</p>
    </div>
    </>
  )
}

export default Layout