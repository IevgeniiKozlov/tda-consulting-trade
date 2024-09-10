'use client'

import { Link as NextUILink } from '@nextui-org/react'
import Link from 'next/link'

const Footer = () => {
  return (
    // <footer className='bg-gray-900 text-primary py-8 z-20'>
    //   <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
    //     {/* <!-- Лого або назва компанії --> */}
    //     <div className='flex items-center mb-4 md:mb-0'>
    //       {/* <img src="/logo.png" alt="TDA Consulting Trade Logo" className="h-10 mr-3"> */}
    //       <span className='text-lg font-semibold'>TDA Consulting Trade</span>
    //     </div>

    //     {/* <!-- Контактна інформація --> */}
    //     <div className='flex items-center space-x-4'>
    //       {/* <!-- Іконка телефону --> */}
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         className='h-6 w-6 text-white'
    //         fill='none'
    //         viewBox='0 0 24 24'
    //         stroke='currentColor'
    //         strokeWidth='2'
    //       >
    //         <path
    //           strokeLinecap='round'
    //           strokeLinejoin='round'
    //           d='M3 5h2l.9 2a9 9 0 006.1 6.1l2-.9V17a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.5A7.5 7.5 0 015 5H4a1 1 0 00-1 1v4a1 1 0 001 1H5z'
    //         />
    //       </svg>

    //       {/* <!-- Номер телефону --> */}
    //       <a
    //         href='tel:+380123456789'
    //         className='text-lg text-primary hover:underline'
    //       >
    //         +380 12 345 6789
    //       </a>
    //     </div>
    //   </div>

    //   {/* <!-- Лінія для розділення --> */}
    //   <div className='border-t border-gray-700 mt-8'></div>

    //   {/* <!-- Copyright --> */}
    //   <div className='container mx-auto text-center text-gray-500 mt-4'>
    //     © 2024 TDA Consulting Trade. All rights reserved.
    //   </div>
    // </footer>

    <footer className='h-full'>
      <div className='w-full max-w-screen-xl mx-auto p-6'>
        <div className='flex flex-col md:flex-row justify-center sm:items-center sm:justify-between'>
          <a
            href='https://tda-consulting-trade.com/'
            className='flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse'
          >
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
            <span className='self-center text-2xl text-light-black font-semibold whitespace-nowrap '>
              TDA Consulting Trade
            </span>
          </a>
          <NextUILink
            as={Link}
            target='_blank'
            href={`tel:+38 (067) 634-04-22`}
            className='px-2 text-lg text-accent text-primary hover:text-hover lg:text-xl'
          >
            +38 (067) 634-04-22
          </NextUILink>
          {/* <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                LOI
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Services
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Products
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul> */}
        </div>
        <hr className='my-4 border-light-black sm:mx-auto dark:border-gray-700 lg:my-6' />
        <span className='block text-sm text-light-black sm:text-center dark:text-gray-400'>
          © 2024{' '}
          <a
            href='https://tda-consulting-trade.com/'
            className='hover:underline'
          >
            TDA Consulting Trade™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
