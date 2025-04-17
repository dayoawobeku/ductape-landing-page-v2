import Layout from "@/components/layout"
import UseCasesHeader from "@/components/use-cases/use-cases-header"
import UseCasesList from "@/components/use-cases/use-cases-list"
import { useCases } from "../../../data/use-cases-data"

export default function UseCasesPage() {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <UseCasesHeader />
        <UseCasesList useCases={useCases} />
      </div>
    </Layout>
  )
}
