'use client'

import { Button } from '@nextui-org/react'

const HeroSection = () => {
  return (
    <section className='h-[calc(100vh-64px)] w-full bg-main bg-cover relative'>
      <div className='container h-full flex flex-col mx-auto pt-28'>
        <div className='h-full flex flex-col content-center w-full md:w-7/12 gap-20'>
          <div className='font-russo text-3xl lg:text-7xl text-[#FED968]'>
            Empowering Global Energy Solutions&nbsp;
          </div>
          <p className='font-russo text-sm lg:text-lg text-black'>
            Leading the way in oil and petroleum product supply, TDA Consulting
            Trade delivers quality and reliability to meet your energy needs
            around the world.
          </p>
          <Button
            className='py-6 w-[200px] text-xl text-white hover:text-primary font-russo border-white hover:border-primary'
            variant='ghost'
          >
            Make LOI
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
