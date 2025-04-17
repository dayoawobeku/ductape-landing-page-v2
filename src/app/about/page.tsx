import Layout from "@/components/layout"
import HeroSection from "@/components/about/hero-section"
import CorePrinciples from "@/components/about/core-principles"
import WhyDuctape from "@/components/about/why-ductape"
import OurVision from "@/components/about/our-vision"
import { coreValues, whyDuctapeReasons } from "../../../data/about-data"

export default function AboutPage() {
  return (
    <Layout>
      <main className="flex-1">
        <HeroSection />
        <CorePrinciples values={coreValues} />
        <WhyDuctape reasons={whyDuctapeReasons} />
        <OurVision />
      </main>
    </Layout>
  )
}
