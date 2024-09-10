'use client'

import { Image as NextUIImage } from '@nextui-org/react'
import NextImage from 'next/image'
import { IServices, services } from '../(lib)/navigations'

const Services = () => {
  return (
    <section id='services' className='pt-[80px] xl:py-[100px]'>
      <div className='container h-full flex justify-start flex-col mx-auto gap-12'>
        <div className='text-primary text-lg underline underline-offset-8 uppercase'>
          Services
        </div>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='flex flex-col w-full md:w-1/2 justify-items-center gap-6'>
            <p className='text-black text-xl md:text-4xl'>Our Services</p>
          </div>
          <div className='flex flex-col w-full md:w-1/2 gap-8'>
            <p className='text-sm md:text-xl text-gray'>
              At TDA Consulting Trade, we offer a comprehensive range of
              services tailored to meet the diverse needs of our clients in the
              oil and gas sector. Our services include:
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between items-center flex-wrap md:flex-row gap-10'>
          {services.map(
            ({ icon: Icon, title, description }: IServices, index) => (
              <div
                key={index}
                className={`flex flex-col items-center w-full gap-6 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className='w-[70px] h-[70px] rounded-full border-1 border-primary flex items-center justify-center'>
                  <Icon size={45} className='text-primary' />
                </div>
                <div className='flex flex-col flex-wrap w-full md:w-[450px] gap-4'>
                  <p className='text-center md:text-start text-xl text-primary font-semibold'>
                    {title}
                  </p>
                  <p className='text-light-black font-medium text-base'>
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
        <div className='flex flex-col'>
          <div></div>
          <NextUIImage
            as={NextImage}
            alt='Quality Products and Services'
            className='w-full h-auto object-contain'
            width={800}
            height={200}
            src='/chain-supply.svg'
          />
        </div>
      </div>
    </section>
  )
}

export default Services
