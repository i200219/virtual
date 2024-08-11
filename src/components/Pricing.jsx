import React from 'react'
import {CheckCircle2} from 'lucide-react'
import { pricingOptions } from '../constants'
const Pricing = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wider'>Pricing</h2>

      <div className='flex flex-wrap'>
        {pricingOptions.map((option, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-4'>
            <div className=' p-10 border border-neutral-700 rounded-md'>
                <p className='text-4xl mb-8'>{option.title}
                {option.title === "Pro" && (
                    <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>(Most Popular)</span>
                )}
                </p>
                <p className='text-xl mb-8'><span className='text-5xl mt-6 mr-2'>{option.price}</span>
                <span className='text-neutral-400 tracking-tight'>/Month</span>
                </p>
                 <ul>
                    {option.features.map((feature, index) => (
                        <li key={index} className='flex items-center mb-4'>
                            <CheckCircle2 className='h-5 w-5 mr-2 text-green-500' />
                            <span>{feature}</span>
                        </li>
                    ))}
                 </ul>
                 <a href="#" className='inline-flex justify-center items-center text-center w-full h-12 
                 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'>Subscribe</a>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
