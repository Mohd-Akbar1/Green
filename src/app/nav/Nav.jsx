import React from 'react'
import Image from 'next/image'
import { HiMagnifyingGlass } from "react-icons/hi2";
const Nav = () => {
  return (
    <div className='nav  flex flex-col  pt-4 relative '>
      <div className='w-[90%] border-2 mx-auto  md:flex rounded-full border-white/40 gap-2' >
       <Image src="/image1.png" alt="Logo" width={50} height={50} className='rounded-full animate-spin' />
        <div className='flex flex-1 justify-between'>
           
                
           
            <button className='border-1 rounded-full w-[33%] text-xl border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Home</button>
            <button className='border-1 rounded-full w-[33%] text-xl border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Contact</button>
             <button className='border-1 rounded-full w-[33%] text-xl border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Blogs</button>
           

            
        </div>
        <div className='flex flex-1 justify-evenly border-1 rounded-full w-[50%]'>
            <input type="text" className='w-[80%]' />
            <button className='border-2 rounded-full size-12 flex items-center justify-center cursor-pointer border-white/40  text-white '><HiMagnifyingGlass className='font-bold  text-2xl'/></button>
        </div>
        <div className='flex flex-1 justify-end'>
            <button className='border-1 rounded-full w-[50%] border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Shop</button>
            <button className='border-1 rounded-full w-[50%] border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Login</button>
        </div>
        

      </div>

      <div className='w-[20vw] bg-white  absolute bottom-0 right-0 rounded-t-lg'>
        <button className='rounded-md border-1 w-[95%] m-2 text-xl font-bold p-2'>Shop tropical Plants</button>

      </div>

    
    </div>
  )
}

export default Nav
