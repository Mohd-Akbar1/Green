import React from 'react'

const Quality = () => {
  return (
    <div className='flex  flex-col items-center justify-center max-w-[90vw] mx-auto my-20 gap-5'>
        <p className='text-7xl font-extrabold'>Quality plants and curated goods</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam, quod voluptatibus in eaque, optio quidem consequatur iure voluptatum mollitia reprehenderit iste consequuntur voluptatem quaerat. Molestiae beatae officia soluta corporis..</p>

            <div>
                <img src="/tea.jpg" alt="tea leaves" className='w-[50vw] h-[50vh] object-fit rounded-xl shadow-3xl' />
            </div>

            {/* faq section */}
            <p className='mt-40 mb-10 text-5xl font-extrabold'>FAQs</p>
           <div className="collapse collapse-arrow bg-base-100 border-1 border-gray-300  shadow-sm ">
                <input type="radio" name="my-accordion-2"  />
                <div className="collapse-title font-extrabold">Ordering of delivery</div>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border-1 border-gray-300 shadow-sm ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-extrabold">Potting services</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
          <div className="collapse collapse-arrow bg-base-100 border-1 border-gray-300 shadow-sm ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-extrabold">Do we ship plants?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border-1 border-gray-300 shadow-sm ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-extrabold">ordering for pickup ?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
          </div>







    </div>
  )
}

export default Quality
