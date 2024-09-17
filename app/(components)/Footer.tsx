'use client'

import {
  Button,
  Divider,
  Image as NextUIImage,
  Link as NextUILink,
} from '@nextui-org/react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'
import { INavSocials, navSocials } from '../(lib)/navigations'

const Footer = () => {
  return (
    <footer className='h-full w-full'>
      <div className='mx-auto flex max-w-screen-2xl flex-col gap-2 px-4 py-3'>
        <div className='flex flex-col items-end gap-4 xs:flex-row xs:justify-between'>
          <NextUILink as={Link} href='/' className='gap-4 flex items-center'>
            <NextUIImage
              as={NextImage}
              src='/logo.png'
              width={100}
              height={100}
              alt=''
              className='w-auto h-auto object-contain'
            />
          </NextUILink>
          <div className='flex flex-col items-center gap-3 md:flex-row'>
            <ul className='flex grow items-center justify-center gap-3 lg:justify-end'>
              {navSocials.map(({ href, icon: Icon }: INavSocials, index) => (
                <li key={index} className='h-full p-0'>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      isIconOnly
                      as={Link}
                      href={href}
                      target='_blank'
                      className='size-fit rounded-2xl bg-transparent [&>svg]:fill-accent hover:[&>svg]:fill-hover'
                    >
                      <Icon
                        size={40}
                        className={
                          index === 0
                            ? 'text-green'
                            : index === 1
                              ? 'text-light-blue'
                              : ''
                        }
                      />
                    </Button>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Divider className='h-0.5 bg-light-black' />
        <div className='text-primary text-center text-xs 2xl:text-lg'>
          © 2024 TDA Consulting Trade™. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
