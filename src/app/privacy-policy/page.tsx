import Layout from "@/components/layout"
import PrivacyPolicyContent from "@/components/privacy-policy/privacy-policy-content"
import PrivacyPolicySidebar from "@/components/privacy-policy/privacy-policy-sidebar"
import { privacyPolicySections } from "../../../data/privacy-policy-data"

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="max-w-[1312px] w-full mx-auto py-12 mb-10 md:px-12 min-[1312px]:px-0">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/5 shrink-0 pr-4">
            <PrivacyPolicySidebar sections={privacyPolicySections} />
          </aside>
          <main className="lg:w-3/4">
          <div className="mb-8 px-6 md:px-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-grey">Privacy Policy</h1>
            <p className="text-[18px] font-medium text-[#818390]">Last Updated: March 27, 2025</p>
            </div>
            <PrivacyPolicyContent sections={privacyPolicySections} />
          </main>
        </div>
      </div>
    </Layout>
  )
}
