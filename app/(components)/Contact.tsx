'use client'

import ContactForm from './ContacForm'

const Contact = () => {
  return (
    <section
      id='contact'
      className='pb-[100px] bg-white bg-cover border-transparent'
    >
      <div className='container relative mx-auto h-full flex rounded-xl bg-contact bg-cover'>
        <div className='absolute bg-black top-0 left-0 opacity-60 rounded-xl z-10 h-full w-full' />
        <div className='flex flex-col w-full gap-12 p-10'>
          <div className='font-russo text-primary text-xl uppercase underline underline-offset-8 z-20'>
            Contact
          </div>
          <div className='flex flex-col gap-20'>
            <div className='flex justify-between gap-10'>
              <ContactForm />
              <div className='flex flex-col w-1/2 gap-8'>
                <p className='text-xl text-gray z-20'>
                  We are here to help you with all your oil and petroleum
                  product needs. Contact TDA Consulting Trade today to discuss
                  how we can assist you with our expert services and top-quality
                  products.
                </p>
                <p className='text-xl text-gray z-20'>
                  Feel free to reach out to us with any questions or to request
                  a quote. We look forward to working with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
