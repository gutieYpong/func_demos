import Hero from "../sections/Hero"
import Features from "../sections/Features"
import Statistics from "../sections/Statistics"
import Testimonials from "../sections/Testimonials"


const IndexPage = () => {
  return (
    <>
      <Hero />
      <Features showAll={false} />
      <Testimonials />
      <Statistics />
    </>
  )
}

export default IndexPage