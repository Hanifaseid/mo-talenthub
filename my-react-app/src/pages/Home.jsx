import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import JobListings from '../components/sections/JobListings'
import Testimonials from '../components/sections/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <JobListings />
      <Testimonials />
    </div>
  )
}

export default Home