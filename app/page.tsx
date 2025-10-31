import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ClientsSection } from "@/components/clients-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SocialRail } from "@/components/social-rail"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <SocialRail />
      <Hero />
      <ServicesSection />
      <BenefitsSection />
       <CTASection />
      <ClientsSection />
      
      <TestimonialsSection />
      
     
      <ContactSection />
      <Footer />
    </main>
  )
}
