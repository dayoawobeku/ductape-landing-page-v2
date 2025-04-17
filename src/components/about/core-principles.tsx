import Image from "next/image"
import { CoreValue } from "../../../types/about"

interface CorePrinciplesProps {
  values: CoreValue[]
}

export default function CorePrinciples({ values }: CorePrinciplesProps) {
  return (
    <section className="py-16">
      <div className="max-w-[1312px] w-full mx-auto px-6 md:px-12 min-[1312px]:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-grey text-center">Our Core Principles</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-grey text-xl font-medium">
          In today&apos;s fast-paced digital landscape, adaptability is paramount. That&apos;s why we are committed to two core
          principles:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.id} className="bg-[#A3C6FB] p-12 rounded-[10px] shadow-md max-w-[620px] w-full">
              <div className="w-full h-[214px] relative mb-16">
                  <Image src={value.imageSrc || "/placeholder.svg"} alt={value.title} fill className="object-contain" />
                </div>
              
              <div className="flex flex-col gap-6 items-start">
              <h3 className="text-[32px] font-bold text-grey">{value.title}</h3>
                <p className="w-full text-grey font-medium text-base">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
