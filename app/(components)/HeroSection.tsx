'use client'

import { Button } from '@nextui-org/react'

const HeroSection = () => {
  return (
    <section className='h-[calc(100vh-64px)] w-full bg-main bg-cover relative'>
      <div className='container h-full flex flex-col mx-auto pt-28'>
        <div className='flex flex-col content-center w-full md:w-1/2 gap-10'>
          <div className='font-russo tracking-[.075em] text-xl md:text-7xl text-light-black'>
            Empowering Global Energy Solutions&nbsp;
            {/* <span className='font-russo tracking-[.075em] text-xl md:text-7xl text-[#884413]'>
              OIL
            </span> */}
          </div>
          <p className='font-russo text-lg text-white'>
            Leading the way in oil and petroleum product supply, TDA Consulting
            Trade delivers quality and reliability to meet your energy needs
            around the world.
          </p>
          <Button
            className='py-6 w-[200px] text-xl text-white font-russo'
            variant='ghost'
          >
            to Make LOI
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
