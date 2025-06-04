'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { HiMagnifyingGlass } from "react-icons/hi2";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='  flex flex-col  pt-4 relative '>
      <div className=' w-[90%] border-2 mx-auto  md:flex rounded-full border-white/40 gap-2' >

        <div className='md:flex flex-1 hidden md:justify-between'>
           
                
            <button className='border-1 rounded-full w-[33%] text-xl border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>GoGreen</button>

            <button className='border-1 rounded-full w-[33%] text-xl border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Home</button>
            <button className='border-1 rounded-full w-[33%] text-xl border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Contact</button>
             <button className='border-1 rounded-full w-[33%] text-xl border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Blogs</button>
           

            
        </div>
        <div className='hidden md:flex flex-1 md:justify-evenly border-1 rounded-full w-[50%]'>
            <input type="text" className='w-[80%] rounded-full' />
            <button className='border-2 rounded-full size-12 flex items-center justify-center cursor-pointer border-white/40  text-white '><HiMagnifyingGlass className='font-bold  text-2xl'/></button>
        </div>
        <div className='md:flex flex-1 md:justify-end hidden'>
            <button className='border-1 rounded-full w-[50%] border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Shop</button>
            <button className='border-1 rounded-full w-[50%] border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>Login</button>
        </div>
        

      </div>
    
      {/* <div className='flex flex-col md:hidden text-white w-full justify-between items-center gap-2 px-2'>
       
          <button className='w-full border-1 border-white rounded-md text-lg font-bold '>Home</button>
          <button className='w-full border-1 border-white rounded-md text-lg font-bold' >Blogs</button>
          <button className='w-full border-1 border-white rounded-md text-lg font-bold'>Contacts</button>
        
      </div> */}
    {/* mobile view */}
      <div className='md:hidden  flex flex-col text-white w-full justify-between items-center gap-2 px-2'>
       <button className='border-1 rounded-full w-[33%] text-xl border-white/40 text-white cursor-pointer hover:bg-white hover:text-black'>GoGreen</button>



      </div>

      {/* <div className='w-[20vw] bg-white  absolute bottom-0 right-0 rounded-t-lg'>
        <button className='rounded-md border-1 w-[95%] m-2 text-xl font-bold p-2'>Shop tropical Plants</button>

      </div> */}

    
    </div>
  )
}

export default Nav
