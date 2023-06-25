import React from 'react'

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
  return (
    <div className="max-w-[1400px] h-[780px] m-auto py-16 relative">
        <div style={{backgroundImage:`url(${slides[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

        </div>
    </div>
  )
}

export default Slider