import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div className='text-white flex flex-col items-start w-[50%] absolute top-30 left-100 '>
        <p className='text-md items-start'>Petal Power</p>
        <p className='text-[10rem] font-extrabold fonts'>Growth</p>
       
        <p className='text-white/40'>We're your online Houseplant Destination we offer a wide range of houseplants and accessories shipped directly from our green house to yours</p>
      

      <div className='flex gap-2 '>
        <div className='w-40 p-2 rounded-md bg-white/1 backdrop-blur-sm text-white border-1 border-white/10'>
            <p>100+ plants</p>
            <p className='font-thin text-white/70'>Lorem ipsum dolor, runt odit at! Perferendis, nobis.</p>
        </div>
        <div className='w-20 p-2 rounded-md bg-white/1 backdrop-blur-sm text-white border-1 border-white/10'>
        <p>100+ plants</p>
          
        </div>
      </div>


      
    </div>
  )
}

export default Main
