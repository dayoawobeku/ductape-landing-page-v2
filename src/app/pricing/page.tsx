import FAQsSection from "@/components/faqs-section";
import Layout from "@/components/layout";
import PricingSection from "@/components/pricing-section";
import { pricingPlans } from "../../../data/pricing-plans";
import { faqItems } from "../../../data/faq-items";


export default function PricingPage() {
  return (
    <Layout>
      <main className="flex-1">
        <PricingSection plans={pricingPlans} />
        <FAQsSection faqs={faqItems} />
      </main>
    </Layout>
  )
}
