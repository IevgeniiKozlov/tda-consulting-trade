'use client'

import {
  Card,
  CardBody,
  CardFooter,
  Image as NextUIImage,
} from '@nextui-org/react'
import NextImage from 'next/image'

const list = [
  {
    title: 'Quality Products and Services',
    img: '/card1.png',
    description:
      'We deliver top-notch products and services that meet the highest industry standards.',
  },
  {
    title: 'Reliable Global Supply Chain',
    img: '/card2.png',
    description:
      'Our global supply chain ensures reliable and timely delivery to our clients worldwide.',
  },
  {
    title: 'Sustainable Energy Solutions',
    img: '/card3.png',
    description:
      'We are committed to providing sustainable energy solutions that minimize environmental impact.',
  },
]

const ServicesCards = () => {
  return (
    <div className='flex justify-center gap-20'>
      {list.map((item, index) => (
        <>
          <Card
            key={index}
            isPressable
            onPress={() => console.log('item pressed')}
            radius='lg'
            classNames={{
              base: 'w-[400px] gap-6 border-none bg-black-bg',
            }}
          >
            <CardBody className='overflow-visible p-0'>
              <NextUIImage
                as={NextImage}
                alt='Quality Products and Services'
                className='object-cover'
                shadow='sm'
                width={500}
                height={290}
                src={item.img}
              />
            </CardBody>
            <CardFooter className='flex flex-col gap-6'>
              <p className='text-xl text-primary uppercase font-bold'>
                {item.title}
              </p>
              <h4 className='text-gray font-medium text-large'>
                {item.description}
              </h4>
            </CardFooter>
          </Card>
        </>
      ))}
    </div>
  )
}

export default ServicesCards
