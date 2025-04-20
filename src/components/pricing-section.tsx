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
    <section className="py-12 px-4 sm:px-4 md:px-8 min-[1312px]:px-0">
      <div className="max-w-[1312px] w-full mx-auto">
        <h1 className="mb-8 text-center text-2xl font-bold text-grey md:text-4xl">
          Choose a plan that&apos;s right for your company
        </h1>

        {/* Pricing Toggle */}
        <div className="mb-10 flex justify-center items-center">
          <Tabs defaultValue="monthly" className="w-[329px] max-h-[48px]">
            <TabsList className="grid w-full grid-cols-2 rounded-full bg-white shadow-[0px_4px_10px_2px_#2328301A] h-full p-1.5 justify-center gap-1.5">
              <TabsTrigger value="monthly" className="rounded-full text-lg font-semibold text-grey">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" className="rounded-full text-lg font-semibold text-grey">
                Yearly <span className="ml-1 text-xs text-grey-600 font-medium">save 20%</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 md:gap-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="border rounded-[5px] border-grey-400 bg-white p-4 pb-8 shadow-[0px_4px_10px_2px_#2328301A] relative max-w-[644px] w-full"
            >
              <div className={`p-3 ${plan.name === "Startup Plan" ? "pb-12" : plan.price !== "Free" ? "pb-4" : "pb-10"}`}>
                <h3 className="text-xl font-bold text-grey">{plan.name}</h3>
                <p className="text-sm text-grey font-normal max-w-[308px]">{plan.description}</p>
              </div>
              <div className="px-3 pb-8">
                {plan.price !== "Free" && <p className="text-sm text-grey font-semibold">Starting at</p>}
                <h2 className="text-4xl font-bold text-grey">
                  {plan.price}
                  {plan.price !== "Free" && <span className="text-xl font-bold">/month</span>}
                </h2>
              </div>
              <Button className="max-h-[48px] h-full mb-4 w-full bg-primary hover:bg-primary py-[12px] px-[20px] rounded-full text-white text-sm font-semibold">
                {plan.buttonText}
              </Button>
              <ul className="space-y-2 text-sm border-t border-[#8F92A1] border-opacity-30 p-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-grey text-base font-medium pt-1.5">
                    <Check className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
              {plan.badge && (
                <span className="absolute right-3 top-3 rounded-full bg-gray-100 px-2 py-0.5 text-[10px]">
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
