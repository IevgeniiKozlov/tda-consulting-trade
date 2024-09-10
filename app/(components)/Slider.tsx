'use client'

import { Image as NextUIImage } from '@nextui-org/react'
import useEmblaCarousel from 'embla-carousel-react'
import NextImage from 'next/image'
import { useEffect } from 'react'

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div
      className='embla mx-auto w-full h-[400px] rounded-2xl border'
      ref={emblaRef}
    >
      <div className='embla__container h-full'>
        <div className='embla__slide flex items-center justify-center'>
          <NextUIImage
            as={NextImage}
            alt='Quality Products and Services'
            className='object-cover'
            width={1000}
            height={400}
            src='/background.png'
          />
        </div>
        <div className='embla__slide flex items-center justify-center'>
          <NextUIImage
            as={NextImage}
            alt='Quality Products and Services'
            className='object-cover'
            width={1000}
            height={400}
            src='/background.png'
          />
        </div>
        <div className='embla__slide flex items-center justify-center'>
          <NextUIImage
            as={NextImage}
            alt='Quality Products and Services'
            className='object-cover'
            width={1000}
            height={400}
            src='/background.png'
          />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
