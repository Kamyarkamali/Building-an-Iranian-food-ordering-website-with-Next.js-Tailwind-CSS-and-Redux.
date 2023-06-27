import React from 'react'

import FoodsPage from '../../Components/templates/FoodsPage';

import foods from '../../Components/data';

function Foods() {
  return (
    <div className='flex flex-wrap items-center py-6 justify-between max-w-[1300px] p-1 gap-4 mx-auto'>
        {foods.map((item)=>(
            <FoodsPage key={item.id} {...item}/>
        ))}
    </div>
  )
}

export default Foods