'use client'

import { Image as NextUIImage } from '@nextui-org/react'
import NextImage from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Products = () => {
  return (
    <section
      id='products'
      className='py-[50px] xl:py-[80px] border-transparent'
    >
      <div className='container mx-auto h-full flex rounded-xl bg-light-black'>
        <div className='flex flex-col w-full gap-12 py-10 md:p-10'>
          <div className='text-primary text-xl underline underline-offset-8 uppercase'>
            Products
          </div>
          <div className='flex flex-col gap-6 lg:gap-20'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-10'>
              <p className='lg:hidden text-center text-4xl text-white'>
                Crude Oil
              </p>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                width={600}
                height={350}
                src='/main.png'
              />
              <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8'>
                <div className='flex items-center gap-4'>
                  <FaArrowLeft
                    className='hidden lg:flex text-white items-center'
                    size={24}
                  />
                  <p className='hidden lg:flex lg:text-4xl text-white'>
                    Crude Oil
                  </p>
                </div>
                <p className='text-base lg:text-xl text-gray'>
                  We supply various grades of crude oil, sourced from reputable
                  producers worldwide, ensuring consistent quality and
                  competitive pricing.We supply various grades of crude oil,
                  sourced from reputable producers worldwide, ensuring
                  consistent quality and competitive pricing.
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-10'>
              <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8'>
                <div className='flex justify-center items-center gap-4 lg:justify-start'>
                  <p className='text-center text-4xl text-white'>Gasoline</p>
                  <FaArrowRight
                    className='hidden lg:flex text-white items-center'
                    size={24}
                  />
                </div>
                <p className='hidden lg:flex text-base lg:text-xl text-gray'>
                  Our gasoline products meet all environmental and performance
                  standards, providing reliable fuel solutions for a variety of
                  applications.
                </p>
              </div>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                width={600}
                height={350}
                src='/gasoline.png'
              />
              <p className='lg:hidden text-base lg:text-xl text-gray'>
                Our gasoline products meet all environmental and performance
                standards, providing reliable fuel solutions for a variety of
                applications.
              </p>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-10'>
              <p className='lg:hidden text-center text-4xl text-white'>
                Diesel Fuel
              </p>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                width={600}
                height={350}
                src='/diesel.png'
              />
              <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8'>
                <div className='flex items-center gap-4'>
                  <FaArrowLeft
                    className='hidden lg:flex text-white items-center'
                    size={24}
                  />
                  <p className='hidden lg:flex text-4xl text-white'>
                    Diesel Fuel
                  </p>
                </div>
                <p className='text-base lg:text-xl text-gray'>
                  We offer high-grade diesel fuel suitable for industrial,
                  commercial, and transportation needs. Our diesel products are
                  formulated to deliver optimal performance and efficiency.
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-10'>
              <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8'>
                <div className='flex justify-center items-center gap-4 lg:justify-start'>
                  <p className='text-4xl text-white'>Specialty Products</p>
                  <FaArrowRight
                    className='hidden lg:flex text-white items-center'
                    size={24}
                  />
                </div>
                <p className='hidden lg:flex text-base lg:text-xl text-gray'>
                  In addition to our core products, we also supply a range of
                  specialty petroleum products tailored to specific industry
                  requirements. Contact us to learn more about our offerings and
                  how we can meet your unique needs.
                </p>
              </div>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                width={600}
                height={350}
                src='/specialproducts.png'
              />
              <p className='lg:hidden text-base lg:text-xl text-gray'>
                In addition to our core products, we also supply a range of
                specialty petroleum products tailored to specific industry
                requirements. Contact us to learn more about our offerings and
                how we can meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
