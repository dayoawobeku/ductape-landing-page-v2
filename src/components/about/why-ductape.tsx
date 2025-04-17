"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { WhyDuctapeReason } from "../../../types/about"
import Image from "next/image"


interface WhyDuctapeProps {
  reasons: WhyDuctapeReason[]
}

export default function WhyDuctape({ reasons }: WhyDuctapeProps) {
  const [openReason, setOpenReason] = useState<string | null>(null)

  const toggleReason = (id: string) => {
    setOpenReason(openReason === id ? null : id)
  }

  return (
    <section className="py-16 bg-[#FFF8E7]">
      <div className="max-w-[1312px] w-full mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-grey">Why Ductape?</h2>
       <div className="flex gap-2 justify-between items-center">
        <div className="max-w-full space-y-4">
          {reasons.map((reason) => (
            <div key={reason.id} className="border-b border-gray-200 pb-10">
              <button
                onClick={() => toggleReason(reason.id)}
                className="flex justify-between items-center w-[644px] text-left py-4"
              >
                <h3 className="text-2xl font-semibold text-grey">{reason.title}</h3>
                {openReason === reason.id ? (
                  <Minus className="h-5 w-5 text-grey" />
                ) : (
                  <Plus className="h-5 w-5 text-grey" />
                )}
              </button>
              {openReason === reason.id && (
                <div className="pt-2 pb-4 w-[644px]">
                  <p className="text-[18px] font-semibold text-grey">{reason.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <Image src="/images/homepage.svg" alt="homepage" width={726} height={536}/>
        </div>
       </div>
      </div>
    </section>
  )
}
