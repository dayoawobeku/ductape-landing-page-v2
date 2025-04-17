"use client"

import { Check } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import type { PricingPlan } from "../../types/pricing"


interface PricingSectionProps {
  plans: PricingPlan[]
}

export default function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section className="bg-white bg-opacity-30 py-16 sm:px-4 md:px-0">
      <div className="max-w-[1312px] w-full mx-auto">
        <h1 className="mb-10 text-center text-3xl font-bold text-grey md:text-5xl">
          Choose a plan that&apos;s right for your company
        </h1>

        {/* Pricing Toggle */}
        <div className="mb-12 flex justify-center items-center">
          <Tabs defaultValue="monthly" className="w-[329px] max-h-[56px]">
            <TabsList className="grid w-full grid-cols-2 rounded-full bg-white shadow-[0px_4px_10px_2px_#2328301A] h-full p-2 justify-center gap-2">
              <TabsTrigger value="monthly" className="rounded-full text-xl font-semibold text-grey">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" className="rounded-full text-xl font-semibold text-grey">
                Yearly <span className="ml-1 text-xs text-grey-600 font-semibold">save 20%</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 md:gap-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-[5px] border-grey-400 bg-white p-6 pb-10 shadow-[0px_4px_10px_2px_#2328301A] relative max-w-[644px] w-full`}
            >
              <div className={`p-4 ${plan.name === "Startup Plan" ? "pb-14" : plan.price !== "Free" ? "pb-6" : "pb-12"}`}>
                <h3 className="text-2xl font-bold text-grey">{plan.name}</h3>
                <p className="text-base text-grey font-normal max-w-[308px]">{plan.description}</p>
              </div>
              <div className={`px-4 pb-10`}>
              {plan.price !== "Free" && <p className="text-base text-grey font-semibold">Starting at</p>}
                <h2 className="text-5xl font-bold text-grey">
                  {plan.price}
                  {plan.price !== "Free" && <span className="text-2xl font-bold">/month</span>}
                </h2>
              </div>
              <Button className="max-h-[56px] h-full mb-6 w-full bg-primary hover:bg-primary py-[14px] px-[25px] rounded-full text-white text-base font-semibold">{plan.buttonText}</Button>
              <ul className="space-y-3 text-sm border-t border-[#8F92A1] border-opacity-30 p-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-grey text-[18px] font-medium pt-2">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
              {plan.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-gray-100 px-2 py-0.5 text-xs">
                  {plan.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
