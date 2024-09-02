'use client'

import HeroCards from './ServicesCards'

const Some = () => {
  return (
    <section>
      <div className='flex flex-col pt-[200px] z-20 gap-4'>
        <p className='font-russo text-3xl text-black text-center'>
          Leading the Global Supply of Petroleum Products
        </p>
        <HeroCards />
      </div>
      {/* <div className='flex pt-[200px] z-20 gap-4'>
        <div className='flex flex-col w-1/2 gap-8'>
          <p className='font-russo text-3xl text-white text-center'>
            Efficient Delivery and Global Energy Solutions for Your Business
          </p>
          <p>
            At TDA-Consulting-Trade, we pride ourselves on providing efficient
            delivery and meeting the global energy needs of our clients. With
            our expertise in the supply and distribution of crude oil and
            refined petroleum products, we ensure reliable and sustainable
            solutions for your business.At TDA-Consulting-Trade, we pride
            ourselves on providing efficient delivery and meeting the global
            energy needs of our clients. With our expertise in the supply and
            distribution of crude oil and refined petroleum products, we ensure
            reliable and sustainable solutions for your business.
          </p>
          <div className='flex gap-10'>
            <div className='flex flex-col'>
              <NextUIImage
                as={NextImage}
                alt='Reliable'
                className='object-cover'
                width={50}
                height={50}
                src='/icon-card2.png'
              />
              <p>Reliable</p>
              <p>
                {' '}
                Our commitment to quality and reliability ensures that your
                energy needs are met efficiently.
              </p>
            </div>
            <div className='flex flex-col'>
              <NextUIImage
                as={NextImage}
                alt='Reliable'
                className='object-cover'
                width={50}
                height={50}
                src='/icon-card1.png'
              />
              <p>Sustainable</p>
              <p>
                {' '}
                We prioritize sustainability in our operations to support a
                greener and more sustainable future.
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-1/2'>
          <NextUIImage
            as={NextImage}
            alt='Quality Products and Services'
            className='object-cover'
            shadow='sm'
            width={600}
            height={600}
            src='/card1.png'
          />
        </div>
      </div> */}
    </section>
  )
}

export default Some
