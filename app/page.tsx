import About from './(components)/About'
import Contact from './(components)/Contact'
import HeroSection from './(components)/HeroSection'
import Location from './(components)/Location'
import Products from './(components)/Products'
import Services from './(components)/Services'

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Products />
      <Location />
      <Contact />
    </>
  )
}
