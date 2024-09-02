'use client'

import useEmblaCarousel from 'embla-carousel-react'
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
      className='embla mx-auto w-full h-[600px] rounded-2xl border'
      ref={emblaRef}
    >
      <div className='embla__container h-full'>
        <div className='embla__slide flex items-center justify-center'>
          Slide 1
        </div>
        <div className='embla__slide flex items-center justify-center'>
          Slide 2
        </div>
        <div className='embla__slide flex items-center justify-center'>
          Slide 3
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
