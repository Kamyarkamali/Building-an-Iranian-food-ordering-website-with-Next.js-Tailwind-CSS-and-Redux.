// import React, { useState } from 'react'

// function Singup() {

//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [confirmPassword,setConfirmPassword]=useState("")

//   const submitHandeler=(e)=>{
//     e.preventDefault()
//   }

//   const singupHandeler=async()=>{
//     const res=await fetch("/api/auth/singup",{
//       method:"POST",
//       body:JSON.stringify({email,password,confirmPassword}),
//       headers:{"Content-Type":"application/json"},
//     })
//     const data=await res.json()
//     console.log(data)
//   }

//   return (
//     <div className='max-w-[1000px] mx-auto flex flex-col items-center mt-[8rem]'>
//       <form onSubmit={submitHandeler} className='flex flex-col gap-10 py-8 border-4 shadow-lg p-[18px] rounded-lg h-[500px] w-[400px]'>
//       <h1 className='text-center text-2xl'>ثبت نام</h1>
//         <input value={email} className='border-2 p-2 outline-none rounded-md placeholder:text-right' type='email' placeholder='ایمیل' onChange={(e)=>setEmail(e.target.value)}/>
//         <input value={password} className='border-2 p-2 outline-none rounded-md placeholder:text-right' type='password' placeholder='رمز عبور' onChange={(e)=>setPassword(e.target.value)}/>
//         <input value={confirmPassword} className='border-2 p-2 outline-none rounded-md placeholder:text-right' type='password' placeholder='تکرار رمز عبور' onChange={(e)=>setConfirmPassword(e.target.value)}/>
//         <button onClick={singupHandeler} className='bg-blue-400 text-xl text-white p-2 rounded-md'>ثبت نام</button>
//       </form>
//     </div>
//   )
// }

// export default Singup



import React from 'react'

import {signIn,signOut} from "next-auth/react"
function index() {

  const singupHandelr=()=>{
    signIn("github")
  }

  const signOutHandeler=()=>{
    signOut()
  }

  return (
    <div className='flex justify-center py-5 border-2'>
      <div className='bg-[#444] p-3 text-white gap-3 rounded-lg w-[300px] flex justify-center'>
      <img className='w-[30px]' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='/'/>
      <button onClick={singupHandelr}>GitHoub ورود از طریق</button>
      </div>
    </div>
  )
}

export default index