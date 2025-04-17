import UseCaseItem from "@/components/use-cases/use-case-item"
import type { UseCase } from "../../../types/use-case"

interface UseCasesListProps {
  useCases: UseCase[]
}

export default function UseCasesList({ useCases }: UseCasesListProps) {
  return (
    <div className="space-y-20">
      {useCases.map((useCase, index) => (
        <UseCaseItem key={useCase.id} useCase={useCase} reverse={index % 2 !== 0} />
      ))}
    </div>
  )
}
