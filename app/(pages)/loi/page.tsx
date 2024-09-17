import LetterOfIntentForm from '@/app/(components)/LetterOfIntentForm'
import { Link as NextUILink } from '@nextui-org/react'

const LOI = () => {
  return (
    <section className='py-20'>
      <div className='container mx-auto flex flex-col max-w-7xl gap-10 items-center'>
        <div className='flex flex-col gap-10 items-center'>
          <h1 className='w-full text-center font-russo text-xl md:text-4xl bg-gradient-to-r from-light-black to-action bg-clip-text text-transparent'>
            Letter Of Intent
          </h1>
          <h2 className='text-xl md:text-3xl text-black'>
            Express Your Interest in Our Services
          </h2>
          <p className='text-start text-sm md:text-2xl text-black'>
            A Letter of Intent (LOI) is an important document that allows you to
            formally express your interest in our services. By providing us with
            an LOI, you help us understand your specific needs and requirements,
            enabling us to offer you a tailored solution.
          </p>
        </div>
        <div className='flex flex-col w-full gap-2 items-start'>
          <h3 className='text-lg text-start text-black'>
            Instructions and Additional Information:
          </h3>
          <ul className='flex flex-col flex-wrap text-wrap text-start text-sm md:text-lg text-neutral-500'>
            <li className='text-pretty'>
              <span className='text-light-black font-bold'>
                1. Filling out the Form:
              </span>{' '}
              Please provide all required information in the fields below. The
              more detailed your answers are, the better we can prepare an
              individual offer for you.
            </li>
            <li className='text-pretty'>
              <span className='text-light-black font-bold'>
                2. Contact Details:
              </span>{' '}
              Make sure you provide up-to-date contact details so we can get in
              touch with you quickly.
            </li>
            <li className='text-pretty'>
              <span className='text-light-black font-bold'>
                3. Mandatory fields:
              </span>{' '}
              Fields marked with an asterisk (*) are mandatory. Please fill them
              out so we can process your request.
            </li>
            <li className='text-pretty'>
              <span className='text-light-black font-bold'>
                4. Confidentiality:
              </span>{' '}
              All information provided by you will be treated confidentially and
              used solely for the preparation of the proposal.
            </li>
            <li className='whitespace-nowrap text-pretty'>
              <span className='text-light-black font-bold'>
                5. Additional Questions:
              </span>{' '}
              If you have any questions about filling out the form or the LOI
              process, please{' '}
              <span>
                <NextUILink
                  target='_blank'
                  className='font-bold sm:text-base md:text-xl align-bottom text-primary decoration-action hover:text-action'
                  href={`https://wa.me/380676340422`}
                  underline='hover'
                >
                  contact us
                </NextUILink>
              </span>
            </li>
          </ul>
        </div>
        <LetterOfIntentForm />
      </div>
    </section>
  )
}

export default LOI
