'use client'

import { Image as NextUIImage } from '@nextui-org/react'
import NextImage from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className='pb-[100px] bg-white bg-cover border-transparent'>
      <div className='container relative mx-auto h-full flex rounded-xl bg-contact bg-cover'>
        <div className='absolute bg-black top-0 left-0 opacity-60 rounded-xl z-10 h-full w-full' />
        <div className='flex flex-col w-full gap-12 p-10'>
          <div className='font-russo text-primary text-xl uppercase underline underline-offset-8 z-20'>
            Contact
          </div>
          <div className='flex flex-col gap-20'>
            <div className='flex justify-between gap-10'>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                width={600}
                height={400}
                src='/plant.png'
              />
              <div className='flex flex-col w-1/2 gap-8'>
                <div className='flex items-center gap-4'>
                  <FaArrowLeft className='text-white items-center' size={24} />
                  <p className='text-4xl text-white z-20'>
                    Fuel Oil & Vacuum Gasoil
                  </p>
                </div>
                <p className='text-xl text-gray z-20'>
                  We are here to help you with all your oil and petroleum
                  product needs. Contact TDA Consulting Trade today to discuss
                  how we can assist you with our expert services and top-quality
                  products.
                </p>
                <p className='text-xl text-gray z-20'>
                  Feel free to reach out to us with any questions or to request
                  a quote. We look forward to working with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
