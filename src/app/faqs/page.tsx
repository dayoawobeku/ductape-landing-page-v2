import Layout from "@/components/layout"
import FAQsHeader from "@/components/faqs/faqs-header"
import FAQsCategories from "@/components/faqs/faqs-categories"
import { faqCategories } from "../../../data/faq-data"

export default function FAQsPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="max-w-[1312px] w-full mx-auto pb-12 md:px-12 min-[1312px]:px-0">
          <FAQsHeader />
          <FAQsCategories categories={faqCategories} />
        </div>
      </div>
    </Layout>
  )
}
