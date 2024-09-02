'use client'

import { Button } from '@nextui-org/react'

const HeroSection = () => {
  return (
    <section className='h-[calc(100vh-64px)] w-full bg-main bg-cover relative'>
      <div className='container h-full flex flex-col mx-auto pt-28'>
        <div className='flex flex-col content-center w-1/2 gap-10'>
          <div className='font-russo tracking-[.075em] text-7xl text-white'>
            Premium Quality&nbsp;
            <span className='font-russo tracking-[.075em] text-7xl text-amber-500'>
              OIL
            </span>
          </div>
          <p className='font-russo text-lg text-white opacity-80'>
            TDA-Consulting-Trade is a trusted name in the oil trading industry,
            specializing in the supply and distribution of crude oil and refined
            petroleum products. With a strong focus on quality, reliability, and
            sustainability, we ensure efficient delivery to meet the energy
            needs of our clients worldwide.
          </p>
          <Button
            className='py-6 w-[200px] text-xl text-white font-russo'
            variant='ghost'
          >
            Send offer
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
