import Image from "next/image"
import type { UseCase } from "../../../types/use-case"

interface UseCaseItemProps {
  useCase: UseCase
  reverse?: boolean
}

export default function UseCaseItem({ useCase, reverse = false }: UseCaseItemProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start py-10 px-6 md:px-0">
      <div className={`space-y-4 ${reverse ? "md:order-2 md:text-left" : ""} text-left pt-10`}>
        <p className="text-2xl font-extrabold text-[#818390]">{useCase.digit}</p>
        <h2 className="text-2xl font-semibold text-grey">{useCase.title}</h2>

        <h3 className="text-grey text-[18px] font-bold mb-2">Scenario:</h3>
        <p className="text-grey text-[18px] font-medium">{useCase.scenario}</p>

        {useCase.helps && (
          <div className="mt-4">
          <h3 className="text-grey text-[18px] font-bold mb-2">How Ductape Helps:</h3>
          <p className="text-grey text-[18px] font-medium">{useCase.helps}</p>
        </div>
        )}

        {useCase.matters && useCase.matters.length > 0 && (
          <div className="mt-4">
            <h3 className="text-grey text-[18px] font-bold mb-2 ">Why It Matters:</h3>
            <ul className="space-y-2">
              {useCase.matters.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#1e40af] mr-2">-</span>
                  <span className="text-grey text-[18px] font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        

        {useCase.bonus && (
          <div className="mt-4">
            <h3 className="text-grey text-[18px] font-bold mb-2">Bonus:</h3>
            <p className="text-grey text-[18px] font-medium">{useCase.bonus}</p>
          </div>
        )}
      </div>

      <div className={`${reverse ? "md:order-1" : ""}`}>
        <div
          className={`relative h-64 md:h-[710px] rounded-lg overflow-hidden`}
          style={{ backgroundColor: useCase.chartBackground }}
        >
          <Image
            src={useCase.chartImage || "/placeholder.svg"}
            alt={`${useCase.title} visualization`}
            fill
            className="object-contain p-4"
          />
        </div>
      </div>
    </div>
  )
}
