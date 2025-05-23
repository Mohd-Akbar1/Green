import React, { useState } from 'react';
import Image from 'next/image';
import { HiMagnifyingGlass } from "react-icons/hi2";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='nav  flex flex-col  pt-4 relative '>
      <div className='hidden w-[90%] border-2 mx-auto  md:flex rounded-full border-white/40 gap-2' >
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
      <div className='flex md:hidden w-[90%] border-2 mx-auto  justify-between rounded-full border-white/40 gap-2'>
               <Image src="/image1.png" alt="Logo" width={50} height={50} className='rounded-full animate-spin' />
               <div className='flex md:hidden items-center w-[90%] mx-auto justify-between border-2 border-white/40 rounded-full px-4 py-2'>
        <Image src="/image1.png" alt="Logo" width={40} height={40} className='rounded-full animate-spin' />
        <button className='text-3xl' onClick={toggleMenu}>
          {isOpen ? '❌' : '🌿'}
        </button>
      </div>


      </div>
      <div className='flex flex-col md:hidden text-white w-full justify-between items-center gap-2 px-2'>
       
          <button className='w-full border-1 border-white rounded-md text-lg font-bold '>Home</button>
          <button className='w-full border-1 border-white rounded-md text-lg font-bold' >Blogs</button>
          <button className='w-full border-1 border-white rounded-md text-lg font-bold'>Contacts</button>
        
      </div>

      <div className='w-[20vw] bg-white  absolute bottom-0 right-0 rounded-t-lg'>
        <button className='rounded-md border-1 w-[95%] m-2 text-xl font-bold p-2'>Shop tropical Plants</button>

      </div>

    
    </div>
  )
}

export default Nav
