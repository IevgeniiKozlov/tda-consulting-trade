'use client'

// import Slider from './Slider'

const About = () => {
  return (
    <section id='about' className='pt-[50px] xl:pt-[100px]'>
      <div className='container h-full flex justify-start flex-col mx-auto gap-12'>
        <div className='text-primary text-lg underline underline-offset-8 uppercase'>
          ABOUT OUR COMPANY
        </div>
        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='flex flex-col max-w-[540px] justify-items-center gap-6'>
            <p className='text-black text-xl md:text-4xl'>
              With access to major suppliers and manufacturers around the globe.
            </p>
          </div>
          <div className='flex flex-col w-full lg:w-1/2 gap-8'>
            <p className='text-sm md:text-xl text-gray'>
              TDA Consulting Trade is a leading Ukrainian trading company
              specializing in the supply of oil and petroleum products,
            </p>
            <p className='text-sm md:text-xl text-gray'>
              At TDA Consulting Trade, we believe in building trust through
              transparency, reliability, and a deep understanding of the energy
              market. Our mission is to offer seamless trading solutions that
              drive success and satisfaction for our customers across the globe.
            </p>
            <p className='text-sm md:text-xl text-gray'>
              <span className='text-sm md:text-xl text-light-black'>
                OUR MISSION{' '}
              </span>
              is to provide first-class quality and services to all our valuable
              customers and to always be innovative and alert in the marketplace
              we serve.
            </p>
          </div>
        </div>
        {/* <Slider /> */}
      </div>
    </section>
  )
}

export default About
