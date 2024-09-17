'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const upAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: ({ custom }: any) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
}

const HeroSection = () => {
  const ref = useRef(null)
  return (
    <section className='h-[calc(100vh-64px)] w-full bg-main bg-cover'>
      <div className='container h-full flex flex-col mx-auto pt-10 lg:pt-32'>
        <motion.div
          ref={ref}
          initial='hidden'
          whileInView='visible'
          variants={upAnimation}
          custom={1}
          viewport={{ amount: 0.2 }} // once: true
          transition={{ duration: 0.8, delay: 0.8 }}
          className='h-full flex flex-col justify-start w-full md:w-7/12 gap-20'
        >
          <motion.h1
            custom={1}
            variants={upAnimation}
            className='font-russo text-4xl lg:text-7xl bg-gradient-to-r from-light-gray to-white bg-clip-text text-transparent'
          >
            Empowering Global Energy Solutions&nbsp;
          </motion.h1>
          <motion.p
            custom={2}
            variants={upAnimation}
            className='font-russo text-sm lg:text-lg text-white'
          >
            Leading the way in oil and petroleum product supply, TDA Consulting
            Trade delivers quality and reliability to meet your energy needs
            around the world.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
