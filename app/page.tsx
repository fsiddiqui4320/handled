import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import SocialStrip from '@/components/sections/SocialStrip'
import HowDifferent from '@/components/sections/HowDifferent'
import Industries from '@/components/sections/Industries'
import Proof from '@/components/sections/Proof'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialStrip />
        <HowDifferent />
        <Industries />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
