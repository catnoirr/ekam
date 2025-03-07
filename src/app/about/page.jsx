import React from 'react'
import About from '../components/About/About'
import StatsSection from '../components/About/StatsSection'
import LeadershipCarousel from '../components/About/LeadershipCarousel'
import PurposeAndLeadership from '../components/About/PurposeAndLeadership'

function page() {
  return (
    <div>
      <About/>
      <PurposeAndLeadership/>
      <LeadershipCarousel/>
      <StatsSection/>
    </div>
  )
}

export default page