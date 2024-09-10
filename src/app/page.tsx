import AboutUs from "@/components/AboutUs"
import FeaturedProperties from "@/components/FeaturedProperties"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
      <Testimonials />
    </>
  )
}
