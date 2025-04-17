import Layout from "@/components/layout"
import TermsOfUseContent from "@/components/terms-of-use/terms-of-use-content"
import { TermsOfUseSections } from "../../../data/terms-of-use-data"
import TermsOfUseSidebar from "@/components/terms-of-use/terms-of-use-sidebar"

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="max-w-[1312px] w-full mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/5 shrink-0 pr-4">
            <TermsOfUseSidebar sections={TermsOfUseSections} />
          </aside>
          <main className="lg:w-3/4">
          <div className="mb-8 px-6 md:px-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-grey">Terms of Use</h1>
            <p className="text-[18px] font-medium text-[#818390]">Last Updated: March 27, 2025</p>
            </div>
            <TermsOfUseContent sections={TermsOfUseSections} />
          </main>
        </div>
      </div>
    </Layout>
  )
}
