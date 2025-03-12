import React from 'react'
import Hero from './componentes/Hero'
import Product from './componentes/Product'
import CTA from './componentes/CTA'
import Quote from './componentes/Quote'
import Brands from './componentes/Brands'
import WhyEkam from './componentes/WhyEkam'
import Testimonials from './componentes/Testimonials'
import Services from './componentes/Services'
import CustomizedProduct from './componentes/CustomizedProduct'
import StatsSection from './components/About/StatsSection'
import LeadershipCarousel from './components/About/LeadershipCarousel'
import About from './components/About/About'
import Review from './componentes/Review'
import Brand from './componentes/Brand'

export default function page() {
  return (
    <div className='bg-white overflow-hidden'>
      <Hero />
      <Product />
      <CTA />
      <Quote />
      <Brands />
      {/* <WhyEkam /> */}
      <LeadershipCarousel/>
      <Testimonials />
      <Services />
      <CustomizedProduct />
      <Review />
      {/* <Brand /> */}
      <StatsSection/>

    </div>
  )
}
