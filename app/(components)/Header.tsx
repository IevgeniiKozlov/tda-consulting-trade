'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link as NextUILink,
} from '@nextui-org/react'
import Link from 'next/link'
import { navMenu } from '../(lib)/navigations'

import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <Navbar
      classNames={{
        base: 'bg-transparent',
      }}
      maxWidth={'2xl'}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='w-full flex justify-between items-center'>
        <NavbarBrand className='gap-1'>
          {/* <NextUILink as={Link} href='/' className='gap-4 flex items-center'>
            <NextUIImage
              as={NextImage}
              src='/logo.png'
              width={200}
              height={50}
              alt=''
              className='rounded-none'
            />
          </NextUILink> */}
          TDA Consulting trade
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex gap-20 justify-center'
        // justify='center'
      >
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-light-gray decoration-primary hover:text-primary'
            href='#'
            underline='hover'
          >
            LOI
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-light-gray decoration-primary hover:text-primary'
            href='#about'
            underline='hover'
          >
            About
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-light-gray decoration-primary hover:text-primary'
            href='#services'
            underline='hover'
          >
            Services
          </NextUILink>
        </NavbarItem>
        <NavbarItem isActive>
          <NextUILink
            className='font-russo text-xl text-light-gray decoration-primary hover:text-primary'
            href='#products'
            underline='hover'
            aria-current='page'
          >
            Products
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-light-gray decoration-primary hover:text-primary'
            href='#contact'
            underline='hover'
          >
            Contact
          </NextUILink>
        </NavbarItem>
        <NavbarItem>
          <NextUILink
            className='font-russo text-xl text-light-gray decoration-primary hover:text-primary'
            href='/loi'
            underline='hover'
          >
            LOI
          </NextUILink>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarContent className='md:hidden text-primary' justify='end'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu className='py-4 sm:items-center'>
        {navMenu.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink as={Link} href={item.href} className=''>
              {item.value}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
