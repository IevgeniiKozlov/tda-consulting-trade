'use client'

import { Image as NextUIImage } from '@nextui-org/react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const leftAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: ({ custom }: any) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
}

const rightAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: ({ custom }: any) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
}

const upAnimation = {
  hidden: {
    y: 100,
    // x: 100,
    opacity: 0,
  },
  visible: ({ custom }: any) => ({
    y: 0,
    // x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
}

const Products = () => {
  const ref = useRef(null)

  return (
    <section
      id='products'
      className='py-[50px] xl:pb-[80px] border-transparent'
    >
      <div className='container mx-auto h-full w-full flex rounded-xl bg-light-black'>
        <div className='flex flex-col w-full gap-12 py-10 md:p-10'>
          <div className='text-primary text-xl underline underline-offset-8 uppercase'>
            Products
          </div>
          <div className='flex flex-col gap-6 lg:gap-20'>
            <motion.div
              ref={ref}
              initial='hidden'
              whileInView='visible'
              variants={upAnimation}
              custom={1}
              viewport={{ amount: 0.2 }} // once: true
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-10'
            >
              <motion.p
                custom={2}
                variants={upAnimation}
                className='lg:hidden text-center text-4xl text-white'
              >
                Crude Oil
              </motion.p>
              <motion.div custom={2} variants={leftAnimation}>
                <NextUIImage
                  classNames={{
                    wrapper:
                      '!relative max-h-[350px] lg:max-h-full flex items-center',
                    img: 'w-fit mx-auto w-full max-h-full object-cover',
                  }}
                  as={NextImage}
                  alt='Quality Products and Services'
                  className='object-cover'
                  width={600}
                  height={350}
                  src='/main.png'
                />
              </motion.div>
              <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8'>
                <motion.div
                  custom={1}
                  variants={leftAnimation}
                  className='flex items-center gap-4'
                >
                  <FaArrowLeft
                    className='hidden lg:flex text-white items-center'
                    size={24}
                  />
                  <motion.p
                    custom={2}
                    variants={leftAnimation}
                    className='hidden lg:flex lg:text-4xl text-white'
                  >
                    Crude Oil
                  </motion.p>
                </motion.div>
                <motion.p
                  custom={3}
                  variants={upAnimation}
                  className='text-base lg:text-xl text-gray'
                >
                  We supply various grades of crude oil, sourced from reputable
                  producers worldwide, ensuring consistent quality and
                  competitive pricing.We supply various grades of crude oil,
                  sourced from reputable producers worldwide, ensuring
                  consistent quality and competitive pricing.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial='hidden'
              whileInView='visible'
              variants={upAnimation}
              custom={1}
              viewport={{ amount: 0.2 }} // once: true
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-10'
            >
              <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8'>
                <motion.div
                  variants={rightAnimation}
                  custom={1}
                  className='flex justify-center items-center gap-4 lg:justify-start'
                >
                  <motion.p
                    variants={rightAnimation}
                    custom={2}
                    className='text-center text-4xl text-white'
                  >
                    Gasoline
                  </motion.p>
                  <FaArrowRight
                    className='hidden lg:flex text-white items-center'
                    size={24}
                  />
                </motion.div>
                <p className='hidden lg:flex text-base lg:text-xl text-gray'>
                  Our gasoline products meet all environmental and performance
                  standards, providing reliable fuel solutions for a variety of
                  applications.
                </p>
              </div>
              <motion.div custom={2} variants={leftAnimation}>
                <NextUIImage
                  classNames={{
                    wrapper:
                      '!relative max-h-[350px] lg:max-h-full flex items-center',
                    img: 'w-fit mx-auto w-full max-h-full object-cover',
                  }}
                  as={NextImage}
                  alt='Quality Products and Services'
                  className='object-cover'
                  width={600}
                  height={350}
                  src='/gasoline.png'
                />
              </motion.div>
              <p className='lg:hidden text-base lg:text-xl text-gray'>
                Our gasoline products meet all environmental and performance
                standards, providing reliable fuel solutions for a variety of
                applications.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              initial='hidden'
              whileInView='visible'
              variants={upAnimation}
              custom={1}
              viewport={{ amount: 0.2 }} // once: true
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-10'
            >
              <motion.p
                custom={2}
                variants={upAnimation}
                className='lg:hidden text-center text-4xl text-white'
              >
                Diesel Fuel
              </motion.p>
              <motion.div custom={2} variants={leftAnimation}>
                <NextUIImage
                  classNames={{
                    wrapper:
                      '!relative max-h-[350px] lg:max-h-full flex items-center',
                    img: 'w-fit mx-auto w-full max-h-full object-cover',
                  }}
                  as={NextImage}
                  alt='Quality Products and Services'
                  className='object-cover'
                  width={600}
                  height={350}
                  src='/diesel.png'
                />
              </motion.div>
              <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8'>
                <motion.div
                  custom={1}
                  variants={leftAnimation}
                  className='flex items-center gap-4'
                >
                  <FaArrowLeft
                    className='hidden lg:flex text-white items-center'
                    size={24}
                  />
                  <motion.p
                    custom={2}
                    variants={leftAnimation}
                    className='hidden lg:flex text-4xl text-white'
                  >
                    Diesel Fuel
                  </motion.p>
                </motion.div>
                <motion.p
                  custom={3}
                  variants={upAnimation}
                  className='text-base lg:text-xl text-gray'
                >
                  We offer high-grade diesel fuel suitable for industrial,
                  commercial, and transportation needs. Our diesel products are
                  formulated to deliver optimal performance and efficiency.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial='hidden'
              whileInView='visible'
              variants={upAnimation}
              custom={1}
              viewport={{ amount: 0.2 }} // once: true
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-10'
            >
              <div className='flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8'>
                <motion.div
                  variants={rightAnimation}
                  custom={1}
                  className='flex justify-center items-center gap-4 lg:justify-start'
                >
                  <motion.p
                    variants={rightAnimation}
                    custom={2}
                    className='text-4xl text-white'
                  >
                    Specialty Products
                  </motion.p>
                  <FaArrowRight
                    className='hidden lg:flex text-white items-center'
                    size={24}
                  />
                </motion.div>
                <p className='hidden lg:flex text-base lg:text-xl text-gray'>
                  In addition to our core products, we also supply a range of
                  specialty petroleum products tailored to specific industry
                  requirements. Contact us to learn more about our offerings and
                  how we can meet your unique needs.
                </p>
              </div>
              <motion.div custom={2} variants={leftAnimation}>
                <NextUIImage
                  classNames={{
                    wrapper:
                      '!relative max-h-[350px] lg:max-h-full flex items-center',
                    img: 'w-fit mx-auto w-full max-h-full object-cover',
                  }}
                  as={NextImage}
                  alt='Quality Products and Services'
                  className='object-cover'
                  width={600}
                  height={350}
                  src='/specialproducts.png'
                />
              </motion.div>
              <p className='lg:hidden text-base lg:text-xl text-gray'>
                In addition to our core products, we also supply a range of
                specialty petroleum products tailored to specific industry
                requirements. Contact us to learn more about our offerings and
                how we can meet your unique needs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
