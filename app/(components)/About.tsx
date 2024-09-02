'use client'

import Slider from './Slider'

const About = () => {
  return (
    <section className='py-[100px] bg-white bg-noise bg-cover border-none'>
      <div className='container h-full flex justify-start flex-col mx-auto gap-12'>
        <div className='font-russo text-primary text-xl underline underline-offset-8'>
          ABOUT OUR COMPANY
        </div>
        <div className='flex gap-10 pt-14'>
          <div className='flex flex-col max-w-[540px] justify-items-center gap-6'>
            <p className='text-black text-4xl'>
              With access to major suppliers and manufacturers around the globe.
            </p>
          </div>
          <div className='flex flex-col w-1/2 gap-8'>
            <p className='text-xl text-gray'>
              TDA Consulting Trade is a leading Ukrainian trading company
              specializing in the supply of oil and petroleum products,
              including gasoline and diesel fuel. With a commitment to
              delivering high-quality products that meet all international
              standards, we strive to ensure the strict fulfillment of all
              customer requirements and preferences. Our team consists of
              experienced professionals dedicated to providing exceptional
              service and fostering long-term partnerships with our clients.
            </p>
            <p className='text-xl text-gray'>
              At TDA Consulting Trade, we believe in building trust through
              transparency, reliability, and a deep understanding of the energy
              market. Our mission is to offer seamless trading solutions that
              drive success and satisfaction for our customers across the globe.
            </p>
            <p className='text-xl text-gray'>
              OUR MISSION is to provide first-class quality and services to all
              our valuable customers and to always be innovative and alert in
              the marketplace we serve.
            </p>
          </div>
        </div>
        <Slider />
      </div>
    </section>
  )
}

export default About
