import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
        <div className='flex'>
                <div className='text-black border-1 flex-2 p-2 m-2 rounded-md'>
            <p className='text-3xl font-bold'>Plants for the People</p> 
            <p className='pt-2 font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quibusdam necessitatibus ut fugit voluptatibus ea ipsum, molestias, impedit, voluptatum repellat enim odio sed harum nostrum tenetur deleniti veniam doloribus ab?</p>

        </div>
        <div className='border-1 flex flex-5 p-2 m-2  rounded-md'>
            <Image  src="/image2.png" width={200} height={100} className='rounded-md' />
            <p className='p-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corrupti vitae perspiciatis earum nam,
                 reprehenderit placeat laudantium debitis, quas pariatur sequi neque ab molestiae sunt autem cupiditate cumque minima! Alias.</p>

        </div>
        </div>


        <div className='flex items-center justify-between w-full border-1 rounded-full  mt-5'>
            <div className='flex gap-2'>
                <button className='bg-black text-white border-1 rounded-full p-2 font-semibold'>Outdoor Plants</button>
                 <button className='border-1 rounded-full px-4 font-semibold'>Indoor Plants</button>
                  <button className='border-1 rounded-full px-4 font-semibold'>Plotted Plants</button>
                  <button className='border-1 rounded-full px-4 font-semibold'>Flower Plants</button>

            </div>
            <div>
                 <button className='border-1 rounded-full p-2 font-semibold'>See All</button>
            </div>
        </div>


        <div className='grid grid-cols-10 grid-rows-1 gap-2 m-1 text-white'>
            <div className='image-Bg col-span-6 min-h-[20vh] rounded-md '>
                <p className='text-2xl font-bold text-white text-center'>Pet friendly plants</p>
                <p className='py-6 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus error eum vitae maxime hic quas quaerat
                     maiores dolores accusamus animi quasi ab eveniet illo quod molestiae, veritatis velit vel officia.</p>

                     <hr />
                     <button className='text-white bg-white/10 p-2 rounded-md backdrop-blur-[2px] m-2 cursor-pointer'>see more.</button>
                
            </div>
             <div className='image-Bg col-span-2 rounded-md'>
                <p className='text-2xl font-bold text-white text-center'>Orchids</p>

                <p className='py-3 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus error eum vitae maxime hic quas quaerat
                    l officia.</p>

                     <hr />
                     <button className='text-white bg-white/10 p-2 rounded-md backdrop-blur-[2px] m-2 cursor-pointer'>see more.</button>
                
               
            </div>
             <div className='image-Bg col-span-2 rounded-md'>
                <p className='text-2xl font-bold text-white text-center'>Succulents</p>

                <p className='py-3 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus error eum vitae maxime hic quas quaerat
                      vel officia.</p>

                     <hr />
                     <button className='text-white bg-white/10 p-2 rounded-md backdrop-blur-[2px] m-2 cursor-pointer'>see more.</button>
                
                 
            </div>
        </div>




        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat nemo perspiciatis dolorem quas ducimus labore! Laudantium culpa, nostrum, a omnis saepe dignissimos illo velit est molestiae ea nam reiciendis!
        </p>

        
      </div>
  )
}

export default Feature
