'use client'

const Footer = () => {
  return (
    <section className='h-full w-full relative bg-slate-400'>
      <div className='container h-full flex justify-start flex-col mx-auto pt-14'>
        <div className='flex flex-col items-center justify-center gap-6'>
          {/* <Image as={NextImage} src='/logo.png' width={50} height={50} alt='' /> */}
          <p>© 2024 TDA-consulting-trade. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
