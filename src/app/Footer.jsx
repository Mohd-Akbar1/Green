import React from 'react'

const Footer = () => {
  return (
   <div className='bg-[url("/image2.png")] bg-cover bg-center min-h-[50vh] m-2 rounded-md shadow-md mx-4 flex flex-col items-center justify-center'>
  <div className='w-full flex flex-col items-center justify-center backdrop-blur-sm min-h-[50vh] rounded-md p-4'>
    <div className='flex flex-col items-center justify-center text-white text-center gap-2'>
      <p className='text-2xl sm:text-4xl lg:text-5xl font-extrabold'>
        Join the community
      </p>
      <p className='text-sm sm:text-base'>
        Subscribe to receive monthly plant tips
      </p>
      <p className='text-sm sm:text-base'>
        Store updates, promotions & more
      </p>
    </div>



        <div className='flex flex-col items-center justify-center w-[90%] m-2 rounded-md'>
  <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3  border-gray-400 mt-4 rounded-md sm:rounded-full w-full sm:w-[50vw] p-2'>
    <button className='border rounded-full px-4 py-2 w-full sm:w-auto text-base sm:text-xl text-white cursor-pointer hover:bg-white hover:text-black'>
      Instagram
    </button>
    <button className='border rounded-full px-4 py-2 w-full sm:w-auto text-base sm:text-xl text-white cursor-pointer hover:bg-white hover:text-black'>
      Twitter
    </button>
    <button className='border rounded-full px-4 py-2 w-full sm:w-auto text-base sm:text-xl text-white cursor-pointer hover:bg-white hover:text-black'>
      Facebook
    </button>
    <button className='border rounded-full px-4 py-2 w-full sm:w-auto text-base sm:text-xl text-white cursor-pointer hover:bg-white hover:text-black'>
      Linked
    </button>
  </div>
  <p className='my-4 text-sm text-white text-center'>©2025 All rights reserved</p>
</div>

        </div>

      
    </div>
  )
}

export default Footer
