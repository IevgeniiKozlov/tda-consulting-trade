'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { IServices, services } from '../(lib)/navigations'
import InfoBlock from './InfoBlock'

const textAnimation = {
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

const Services = () => {
  const ref = useRef(null)

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }} // once: true
      transition={{ duration: 0.8, delay: 0.8 }}
      id='services'
      className='pt-[50px] xl:py-[80px]'
    >
      <div className='container h-full flex justify-start flex-col mx-auto gap-12'>
        <div className='text-primary text-lg underline underline-offset-8 uppercase'>
          Services
        </div>
        <div className='flex flex-col justify-center md:flex-row gap-4 xl:gap-10'>
          <div className='flex flex-col justify-center max-w-7xl gap-2'>
            <motion.h2
              custom={3}
              variants={textAnimation}
              className='text-black text-xl md:text-4xl text-center'
            >
              Our Services
            </motion.h2>
            <motion.p
              custom={3}
              variants={textAnimation}
              className='text-center text-sm md:text-xl text-neutral-500'
            >
              At TDA Consulting Trade, we provide a comprehensive suite of
              services designed to cater to the unique and diverse needs of our
              clients in the oil and gas sector. Our expertise and dedication to
              excellence ensure that we deliver solutions that are both
              innovative and reliable, helping our clients to achieve their
              goals efficiently.
            </motion.p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center flex-wrap md:flex-row gap-4 xl:gap-20'>
          {services.map(
            ({ icon: Icon, title, description }: IServices, index) => (
              <motion.div
                ref={ref}
                initial='hidden'
                whileInView='visible'
                custom={index + 1}
                variants={textAnimation}
                viewport={{ amount: 0.2 }} // once: true
                transition={{ duration: 0.8, delay: 0.8 }}
                key={index}
                className='flex flex-col flex-wrap w-full md:max-w-[500px] gap-4 p-6 border-2 border-orange-300 rounded-lg'
              >
                <div className='flex items-end gap-10'>
                  <Icon size={45} className='text-primary' />
                  <p className='text-center md:text-start text-xl text-action font-semibold'>
                    {title}
                  </p>
                </div>
                <p className='text-neutral-500 font-medium text-base'>
                  {description}
                </p>
              </motion.div>
            ),
          )}
        </div>
        <InfoBlock />
      </div>
    </motion.section>
  )
}

export default Services
