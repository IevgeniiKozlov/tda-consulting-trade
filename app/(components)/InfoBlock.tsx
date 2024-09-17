'use client'

import { Divider } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { IInfo, infoBlock } from '../(lib)/navigations'

const blockAnimation = {
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

const InfoBlock = () => {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      whileInView='visible'
      variants={blockAnimation}
      custom={1}
      viewport={{ amount: 0.2 }} // once: true
      transition={{ duration: 0.8, delay: 0.8 }}
      className='h-full'
    >
      <div className='container mx-auto flex bg-info bg-cover rounded-xl'>
        <div className='flex flex-col justify-center lg:flex-row gap-10 p-16'>
          <div className='flex flex-col flex-wrap justify-start md:flex-row w-full lg:w-1/2 gap-10'>
            {infoBlock.map(({ percent, description }: IInfo, index) => (
              <div key={index} className='flex grow w-[220px] gap-4'>
                <Divider orientation='vertical' className='bg-gray w-1' />
                <div className='flex flex-col'>
                  <p className='text-4xl lg:text-7xl bg-gradient-to-r from-light-black to-action bg-clip-text text-transparent'>
                    {percent}
                  </p>
                  <p className='tetx-base lg:text-xl font-bold text-light-black'>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col w-full lg:w-1/2 gap-10'>
            <h3 className='font-russo text-xl bg-gradient-to-r from-light-black to-light-gray bg-clip-text text-transparent'>
              Leading the Energy Trading Market with Confidence
            </h3>
            <p className='text-base text-white sm:text-black '>
              With many years of experience, TDA Consulting Trade has become a
              trusted name in the energy sector. Our commitment to quality and
              customer satisfaction drives our impressive growth and market
              presence.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default InfoBlock
