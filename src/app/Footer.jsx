import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[url("/image2.png")] h-[50vh] bg-cover m-2 rounded-md shadow-md mx-4 flex flex-col items-center justify-center'>

        <div className='w-[100%] flex flex-col items-center justify-center backdrop-blur-[4px] h-[100%] rounded-md'>


            <div className='flex flex-col items-center justify-center text-white m-4 h-[50%]'>
            <p className='text-5xl font-extrabold'>Join the community</p>
            <p>subscribe to receive monthly plants tips</p>
            <p>store updates promotions & more</p>


        </div>

        <div className='flex  flex-col items-center justify-center  h-[40%] w-[90%] m-2 rounded-md  '>
            <div className='flex flex-col  md:flex-row items-center justify-center gap-5 border-1 border-gray-400 mt-4 rounded-full w-[80vw]'>
                <button className='border-1 rounded-full p-3 w-[25%] text-xl  text-white cursor-pointer hover:bg-white hover:text-black'>Instagram</button>
                <button className='border-1 rounded-full p-3 w-[25%] text-xl text-white cursor-pointer hover:bg-white hover:text-black'>Twitter</button>
                <button className='border-1 rounded-full p-3 w-[25%] text-xl text-white cursor-pointer hover:bg-white hover:text-black'>Facebook</button>
                <button className='border-1 rounded-full p-3 w-[25%] text-xl text-white cursor-pointer hover:bg-white hover:text-black'>Linked</button>
            </div>
             <p className='my-4 text-sm text-white'> ©2025 All rights reserved</p>
            
           
        </div>
        </div>

      
    </div>
  )
}

export default Footer
