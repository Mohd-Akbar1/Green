import React from 'react'

const Indoor = () => {
  return (
    <div className='w-full mx-4 px-4 my-10'>
        <div className='w-full flex flex-col md:flex-row  items-center gap-2'>
            <p className='flex-2'> creating out our video content including informative webinars where you can learn more about your indoor plants </p>
            <p className='text-7xl font-extrabold flex-3 px-10'>Indoor Collection</p>
        </div>


        {/* plants section */}

        <div className='w-[80vw] mx-auto grid grid-cols-5 grid-rows-2 gap-4 m-2 p-4'>

        {/* top div */}
            <div className='border-1 bg-[url("/plant1.jpg")] text-white  justify-end min-h-[30vh] flex flex-col border-gray-300 rounded-xl shadow-md col-span-3 cursor-pointer bg-cover'>
               <div className=' m-2 rounded-xl backdrop-blur-[4px] bg-white/5'>
                 <p className='text-4xl font-bold p-2'>Philodendron</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veniam tempora minus dolorum, itaque omnis, ipsa quae et, necessitatibus facilis dignissimos adipisci eos repudiandae inventore sequi. Nesciunt corrupti dolorum debitis.</p>
                
               </div>
            </div>
            <div className='border-1 border-gray-300 rounded-xl bg-[url("/plant1.jpg")] shadow-md col-span-2 bg-cover text-white  justify-end min-h-[30vh] flex flex-col'>
                 <div className=' m-2 rounded-xl backdrop-blur-[4px] bg-white/5'>
                 <p className='text-4xl font-bold p-2'>Philodendron</p>
                <p> omnis, ipsa quae et, necessitatibus facilis dignissimos adipisci eos repudiandae inventore sequi. Nesciunt corrupti dolorum debitis.</p>
                
               </div>
            </div>

    {/* below  */}
            <div className='border-1 border-gray-300 rounded-xl shadow-md col-span-2 bg-[url("/plant1.jpg")] bg-cover text-white  justify-end min-h-[30vh] flex flex-col'>
                <div className=' m-2 rounded-xl backdrop-blur-[4px] bg-white/5'>
                 <p className='text-4xl font-bold p-2'>Philodendron</p>
                <p>Loraque omnis, ipsa quae et, necessitatibus facilis dignissimos adipisci eos repudiandae inventore sequi. Nesciunt corrupti dolorum debitis.</p>
                
               </div>
            </div>
            <div className='border-1 border-gray-300 rounded-xl shadow-md col-span-3 bg-[url("/plant1.jpg")] bg-cover text-white  justify-end min-h-[30vh] flex flex-col    '>
                <div className=' m-2 rounded-xl backdrop-blur-[4px] bg-white/5'>
                 <p className='text-4xl font-bold p-2'>Philodendron</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veniam tempora minus dolorum, itaque omnis, ipsa quae et, necessitatibus facilis dignissimos adipisci eos repudiandae inventore sequi. Nesciunt corrupti dolorum debitis.</p>
                
               </div>
            </div>

        </div>
      
    </div>
  )
}

export default Indoor
