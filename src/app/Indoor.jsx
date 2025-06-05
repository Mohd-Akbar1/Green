import React from 'react'

const Indoor = () => {
  return (
    <div className='w-full mx-4 px-4 my-10'>
        <div className='w-full flex flex-col md:flex-row  items-center gap-2'>
            <p className='flex-2'> creating out our video content including informative webinars where you can learn more about your indoor plants </p>
            <p className='text-7xl font-extrabold flex-3 px-10'>Indoor Collection</p>
        </div>


        {/* plants section */}

        <div className='w-[80vw] mx-auto grid grid-cols-5 grid-rows-2 gap-4'>

            <div className='border-1 border-gray-300 rounded-xl shadow-md grid-cols-3'>
                <p className='text-4xl font-bold'>Philodendron</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veniam tempora minus dolorum, itaque omnis, ipsa quae et, necessitatibus facilis dignissimos adipisci eos repudiandae inventore sequi. Nesciunt corrupti dolorum debitis.</p>
            </div>
            <div className='border-1 border-gray-300 rounded-xl shadow-md grid-cols-2'>
                <p className='text-4xl font-bold'>Philodendron</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veniam tempora minus dolorum, itaque omnis, ipsa quae et, necessitatibus facilis dignissimos adipisci eos repudiandae inventore sequi. Nesciunt corrupti dolorum debitis.</p>
            </div>

        </div>
      
    </div>
  )
}

export default Indoor
