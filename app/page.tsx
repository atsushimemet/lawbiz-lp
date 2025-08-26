import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProblemsSection from '@/components/ProblemsSection'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}