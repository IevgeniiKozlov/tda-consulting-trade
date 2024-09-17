'use client'

import { Image as NextUIImage } from '@nextui-org/react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import { useRef, useState } from 'react'
import { coreValues, IValues } from '../(lib)/navigations'

const hiddenMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

const textAnimation = {
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

const valuesAnimation = {
  hidden: {
    y: 100,
    // x: 100,
    opacity: 0,
  },
  visible: ({ custom }: any) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
}

const About = () => {
  const [isInView, setIsInView] = useState<boolean>(false)
  const ref = useRef(null)

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }} // once: true
      transition={{ duration: 0.8, delay: 0.8 }}
      id='about'
      className='pt-[50px] xl:pt-[80px]'
    >
      <div className='container h-full flex flex-col justify-start mx-auto gap-6 xl:gap-12'>
        <div className='text-primary text-lg underline underline-offset-8 uppercase'>
          ABOUT OUR COMPANY
        </div>
        <div className='flex flex-col justify-between lg:flex-row gap-6 xl:gap-10'>
          <div className='flex flex-col w-full lg:max-w-[550px] justify-items-center gap-6'>
            <motion.h2
              custom={1}
              variants={textAnimation}
              className='font-russo text-xl md:text-4xl bg-gradient-to-r from-light-black to-action bg-clip-text text-transparent'
            >
              Discover the Unmatched Advantages of Partnering with TDA
              Consulting Trade{' '}
            </motion.h2>
            <motion.p
              custom={2}
              variants={textAnimation}
              className='text-sm md:text-xl text-neutral-500'
            >
              Our company is a leading Ukrainian trading company specializing in
              the supply of oil and petroleum products worldwide.
            </motion.p>
            <motion.p
              custom={3}
              variants={textAnimation}
              className='text-sm md:text-xl text-neutral-500'
            >
              At TDA Consulting Trade, we believe in building trust through
              transparency, reliability, and a deep understanding of the energy
              market. Our mission is to offer seamless trading solutions that
              drive success and satisfaction for our customers across the globe.
            </motion.p>
          </div>
          <motion.div
            initial={false}
            animate={
              isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            className='flex flex-col w-full lg:w-1/2 gap-8'
          >
            <NextUIImage
              classNames={{
                wrapper:
                  '!relative max-h-[550px] lg:max-h-full flex items-center',
                img: 'w-fit mx-auto w-full max-h-full object-cover',
              }}
              as={NextImage}
              alt='Quality Products and Services'
              width={700}
              height={400}
              src='/background.png'
            />
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }} // once: true
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-col justify-center gap-2'
        >
          <motion.h2
            custom={3}
            variants={valuesAnimation}
            className='text-black text-xl md:text-4xl text-center'
          >
            Our Core Values
          </motion.h2>
          <motion.p
            custom={4}
            variants={valuesAnimation}
            className='text-center text-sm md:text-xl text-neutral-500'
          >
            At TDA Consulting Trade, our core values guide our business
            practices and interactions. We believe in building strong
            relationships with our clients and partners through unwavering
            integrity, reliability, sustainability, and a customer-centric
            approach.
          </motion.p>
        </motion.div>
        <div className='flex flex-wrap justify-between gap-4'>
          {coreValues.map(({ title, img, description }: IValues, index) => (
            <motion.div
              ref={ref}
              initial='hidden'
              whileInView='visible'
              custom={index + 1}
              variants={valuesAnimation}
              viewport={{ amount: 0.2 }} // once: true
              transition={{ duration: 0.8, delay: 0.8 }}
              key={index}
              className='flex grow basis-[300px] flex-col items-center justify-between gap-4 p-4 md:gap-6 lg:gap-9 rounded-lg border-2 border-orange-300 bg-orange-100 bg-opacity-20 backdrop-blur-lg max-w-md mx-auto'
            >
              <h3 className='font-russo text-2xl text-light-black'>{title}</h3>
              <NextUIImage
                className='!h-fit max-h-[200px] max-w-[200px] rounded-none object-cover'
                as={NextImage}
                src={img}
                width={100}
                height={100}
                alt='Integrity'
                priority
              />
              <p className='text-center'>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default About
