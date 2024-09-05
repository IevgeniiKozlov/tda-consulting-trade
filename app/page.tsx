import About from './(components)/About'
import Contact from './(components)/Contact'
import Footer from './(components)/Footer'
import Header from './(components)/Header'
import HeroSection from './(components)/HeroSection'
import Location from './(components)/Location'
import Products from './(components)/Products'
import Services from './(components)/Services'

export default function MainPage() {
  return (
    <main className='h-full bg-white bg-noise bg-cover'>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Products />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
