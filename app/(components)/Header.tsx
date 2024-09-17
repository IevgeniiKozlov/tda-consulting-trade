'use client'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image as NextUIImage,
  Link as NextUILink,
} from '@nextui-org/react'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <Navbar
      classNames={{
        base: 'bg-background h-[80px]',
      }}
      // position='static'
      maxWidth={'2xl'}
    >
      <NavbarContent className='w-full flex justify-between items-center'>
        <NavbarBrand className='gap-1'>
          <NextUILink as={Link} href='/' className='gap-4 flex items-center'>
            <NextUIImage
              as={NextImage}
              src='/logo.png'
              width={100}
              height={100}
              alt='Tda Consulting trade - oil trade company'
              className='w-auto h-auto object-contain'
            />
          </NextUILink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='flex gap-20 justify-center' justify='end'>
        <NavbarItem>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <NextUILink
              target='_blank'
              className='hidden sm:flex font-russo sm:text-base md:text-xl align-bottom text-white decoration-orange-100 hover:text-action'
              href={`tel:+38 (067) 634-04-22`}
              underline='hover'
            >
              +38 (067) 634-04-22
            </NextUILink>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              as={Link}
              href='/loi'
              variant='ghost'
              className='h-fit rounded-xl px-6 py-2 font-russo bg-primary border-white text-white hover:text-action hover:border-action hover:bg-light-gray'
            >
              Make LOI
            </Button>
          </motion.button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
