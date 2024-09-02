'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image as NextUIImage,
  Link as NextUILink,
} from '@nextui-org/react'
import NextImage from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const menuItems = ['Products', 'LOI calculating', 'Contact us']

  return (
    <Navbar
      classNames={{
        base: 'bg-noise',
      }}
      maxWidth={'xl'}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='w-full flex justify-between items-center'>
        <NavbarBrand className='gap-1'>
          <NextUILink as={Link} href='/' className='gap-4 flex items-center'>
            <NextUIImage
              as={NextImage}
              src='/logo.png'
              width={48}
              height={35}
              alt=''
              className='bg-primary'
            />
            <p className='font-russo text-lg text-primary'>
              TDA ConsultingTrade
            </p>
          </NextUILink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex gap-20 justify-center'
        // justify='center'
      >
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-primary decoration-amber-500 hover:text-amber-500'
            href='#'
            underline='hover'
          >
            About
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-primary decoration-amber-500 hover:text-amber-500'
            href='#'
            underline='hover'
          >
            Services
          </NextUILink>
        </NavbarItem>
        <NavbarItem isActive>
          <NextUILink
            className='font-russo text-xl text-primary decoration-amber-500 hover:text-amber-500'
            href='#'
            underline='hover'
            aria-current='page'
          >
            Products
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-primary decoration-amber-500 hover:text-amber-500'
            href='#'
            underline='hover'
          >
            Contact
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-primary decoration-amber-500 hover:text-amber-500'
            href='#'
            underline='hover'
          >
            LOI offer
          </NextUILink>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent className='hidden md:flex text-primary' justify='end'>
        <FaPhone
          size={45}
          className='flex p-2 text-primary hover:text-amber-400'
        />
      </NavbarContent> */}

      {/* Mobile menu */}
      <NavbarContent className='md:hidden text-primary' justify='end'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu className='py-4 sm:items-center'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink className=''>{item}</NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
