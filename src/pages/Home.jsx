import { useEffect } from 'react'
import Hero from '../components/home/Hero.jsx'
import ServiceFinder from '../components/home/ServiceFinder.jsx'
import ServicesOverview from '../components/home/ServicesOverview.jsx'
import StatsBand from '../components/home/StatsBand.jsx'
import SavingsEstimator from '../components/home/SavingsEstimator.jsx'
import WhyJBS from '../components/home/WhyJBS.jsx'
import BusinessTiers from '../components/home/BusinessTiers.jsx'
import Reviews from '../components/home/Reviews.jsx'
import BilingualHighlight from '../components/home/BilingualHighlight.jsx'
import TeamPreview from '../components/home/TeamPreview.jsx'
import FinalCTA from '../components/home/FinalCTA.jsx'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <ServiceFinder />
      <ServicesOverview />
      <StatsBand />
      <SavingsEstimator />
      <WhyJBS />
      <BusinessTiers />
      <Reviews />
      <BilingualHighlight />
      <TeamPreview />
      <FinalCTA />
    </main>
  )
}
