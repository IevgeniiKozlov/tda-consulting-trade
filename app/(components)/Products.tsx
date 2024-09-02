'use client'

import { Image as NextUIImage } from '@nextui-org/react'
import NextImage from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Products = () => {
  return (
    <section className='py-[100px] bg-white bg-noise bg-cover border-transparent'>
      <div className='container mx-auto h-full flex rounded-xl bg-black-bg'>
        <div className='flex flex-col w-full gap-12 p-10'>
          <div className='font-russo text-primary text-xl uppercase underline underline-offset-8'>
            Products
          </div>
          <div className='flex flex-col gap-20'>
            <div className='flex justify-between gap-10'>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                width={600}
                height={400}
                src='/plant.png'
              />
              <div className='flex flex-col w-1/2 gap-8'>
                <div className='flex items-center gap-4'>
                  <FaArrowLeft className='text-white items-center' size={24} />
                  <p className='text-4xl text-white'>
                    Fuel Oil & Vacuum Gasoil
                  </p>
                </div>
                <p className='text-xl text-gray'>
                  TTOIL started out as a fuel oil and a VGO trader, and this is
                  what we are really good at. Every month we move over 1 million
                  tons of heavy feedstocks. Half of this is used by refineries
                  to supplement their incoming crude streams, andthe other half
                  as blendstock for bunker fuel.
                </p>
                <p className='text-xl text-gray'>
                  Our fuel oil trading geography is extensive. We source fuel
                  oil and VGO from Russia, Kazakhstan, Turkmenistan, Algeria,
                  West Africa and take it to major trading hubs including
                  Rotterdam, Fujairah, Singapore, Turkey or directly to
                  refineries. We serve marine bunker markets through long term
                  partnerships with fleet owners and bunkering companies. We add
                  value by carefully selecting incoming streams, using our
                  extensive terminal network to store and blend them where
                  required, maintaining the quality throughout.
                </p>
              </div>
            </div>
            <div className='flex justify-between gap-10'>
              <div className='flex flex-col w-1/2 gap-8'>
                <div className='flex items-center gap-4'>
                  <p className='text-4xl text-white'>
                    Fuel Oil & Vacuum Gasoil
                  </p>
                  <FaArrowRight className='text-white items-center' size={24} />
                </div>
                <p className='text-xl text-gray'>
                  TTOIL started out as a fuel oil and a VGO trader, and this is
                  what we are really good at. Every month we move over 1 million
                  tons of heavy feedstocks. Half of this is used by refineries
                  to supplement their incoming crude streams, andthe other half
                  as blendstock for bunker fuel.
                </p>
                <p className='text-xl text-gray'>
                  Our fuel oil trading geography is extensive. We source fuel
                  oil and VGO from Russia, Kazakhstan, Turkmenistan, Algeria,
                  West Africa and take it to major trading hubs including
                  Rotterdam, Fujairah, Singapore, Turkey or directly to
                  refineries.
                </p>
              </div>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                width={600}
                height={400}
                src='/plant.png'
              />
            </div>
            <div className='flex justify-between gap-10'>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                width={600}
                height={400}
                src='/plant.png'
              />
              <div className='flex flex-col w-1/2 gap-8'>
                <div className='flex items-center gap-4'>
                  <FaArrowLeft className='text-white items-center' size={24} />
                  <p className='text-4xl text-white'>
                    Fuel Oil & Vacuum Gasoil
                  </p>
                </div>
                <p className='text-xl text-gray'>
                  TTOIL started out as a fuel oil and a VGO trader, and this is
                  what we are really good at. Every month we move over 1 million
                  tons of heavy feedstocks. Half of this is used by refineries
                  to supplement their incoming crude streams, andthe other half
                  as blendstock for bunker fuel.
                </p>
                <p className='text-xl text-gray'>
                  Our fuel oil trading geography is extensive. We source fuel
                  oil and VGO from Russia, Kazakhstan, Turkmenistan, Algeria,
                  West Africa and take it to major trading hubs including
                  Rotterdam, Fujairah, Singapore, Turkey or directly to
                  refineries. We serve marine bunker markets through long term
                  partnerships with fleet owners and bunkering companies. We add
                  value by carefully selecting incoming streams, using our
                  extensive terminal network to store and blend them where
                  required, maintaining the quality throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
