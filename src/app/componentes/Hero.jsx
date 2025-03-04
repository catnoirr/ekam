import React from 'react'

export default function Hero() {
  return (
    <section className='flex justify-center items-center w-full flex-col'>
      <div className='relative w-[90%] h-[600px] bg-gray-200 hover:shadow-xl transition-shadow duration-300'>
        <img 
          src="/products/hero.png" 
          alt="Hero banner" 
          width={1920}
          height={1080}
          className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500'
        />
      </div>
      <div className='text-white text-xl font-semibold px-10 py-3 my-5 bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer'>
        Get Best Price
      </div>
    </section>
  )
}
