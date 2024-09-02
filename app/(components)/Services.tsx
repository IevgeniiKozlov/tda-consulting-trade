'use client'

import ServicesCards from './ServicesCards'

const Services = () => {
  return (
    <section className='py-[100px] bg-white bg-noise bg-cover'>
      <div className='container h-full flex justify-start flex-col mx-auto gap-12'>
        <div className='font-russo text-primary text-xl underline underline-offset-8 uppercase'>
          Services
        </div>
        <div className='flex gap-10 pt-14'>
          <div className='flex flex-col w-1/2 justify-items-center gap-6'>
            <p className='text-black text-4xl'>Our Services</p>
          </div>
          <div className='flex flex-col w-1/2 gap-8'>
            <p className='text-xl text-gray'>
              As a professional company, we are specialized to provide you the
              following services:
            </p>
            <p className='text-xl text-gray'>
              Trading crude oil and refined petroleum products: Our team is
              ready support your company to realize your trading and commerce
              businesses in crude oil and refined petroleum products. Crude oil
              and refined petroleum products (such as gasoline, jet fuel and
              diesel) are some of the most widely used and traded commodities in
              the world. Thus, as TTOIL Trading and Commerce Agency we are
              involved in the exploration, extraction, refining and marketing
              and transporting of these commodities worldwide. As a professional
              company, we are specialized to support to realize your trading and
              commerce businesses in crude oil and refined petroleum products.
            </p>
          </div>
        </div>
        <ServicesCards />
      </div>
    </section>
  )
}

export default Services
