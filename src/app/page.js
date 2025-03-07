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
import LeadershipCarousel from './components/About/LeadershipCarousel'
import StatsSection from './components/About/StatsSection'
export default function page() {
  return (
    <div>
      <Hero />
      <Product />
      <CTA />
      <Quote />
      <Brands />
      {/* <WhyEkam /> */}
      <LeadershipCarousel/>
      <Testimonials />
      <Services />
      <StatsSection/>
      {/* <CustomizedProduct /> */}
    </div>
  )
}
