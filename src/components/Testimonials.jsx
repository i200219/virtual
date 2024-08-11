import React from 'react'
import {testimonials } from '../constants'
const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-10 lg:my-20'>What people say</h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((item, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
            <div className='bg-neutral-900 p-6 rounded-md text-md border border-neutral-800 font-thin'>
              <p>{item.text}</p>
              <div className='flex mt-8 items-start'>
                <img src={item.image} alt="" className="w-12 h-12 rounded-full"/>
                <div className='ml-4'>
                  <h3 className='text-lg font-medium'>{item.user}</h3>
                  <p className='text-neutral-500'>{item.company}</p>
                </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
