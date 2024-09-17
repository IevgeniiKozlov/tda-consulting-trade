'use client'

const upAnimation = {
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

import { motion } from 'framer-motion'
import { useRef } from 'react'

const Location = () => {
  const ref = useRef(null)

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      whileInView='visible'
      variants={upAnimation}
      custom={1}
      viewport={{ amount: 0.2 }} // once: true
      transition={{ duration: 0.8, delay: 0.8 }}
      className='pt-[50px]'
    >
      <div className='container mx-auto flex justify-center h-[200px] bg-worldmap bg-cover'>
        <div className='flex items-center w-[600px]'>
          <p className='font-russo text-2xl md:text-4xl text-center bg-gradient-to-r from-light-black to-action bg-clip-text text-transparent'>
            Delivering Oil Worldwide: Trusted Supply Chain to Every Corner of
            the Globe
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default Location
