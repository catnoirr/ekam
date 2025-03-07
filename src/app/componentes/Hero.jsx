'use client'
import React, { useState } from 'react'
import ModalDrawer from './ModalDrawer'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='flex justify-center items-center w-full flex-col px-4 sm:px-6 md:px-8'>
      <div className='relative w-full md:w-[90%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg'>
        <img 
          src="/products/hero.png" 
          alt="Hero banner" 
          width={1920}
          height={1080}
          className='absolute inset-0 w-full h-full object-contain md:object-cover object-center transform hover:scale-105 transition-transform duration-500'
          loading="eager"
          priority="true"
        />
      </div>

      <div 
        onClick={() => setIsModalOpen(true)}
        className='text-white text-base sm:text-lg md:text-xl font-semibold px-6 sm:px-8 md:px-10 py-2 sm:py-3 my-3 sm:my-4 md:my-5 bg-blue-400 rounded-4xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer'>
        Get Best Price
      </div>

      <ModalDrawer 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProduct={null}
      />
    </section>
  )
}
