import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { FAQ } from "../../types/faq"


interface FAQsSectionProps {
  faqs: FAQ[]
}

export default function FAQsSection({ faqs }: FAQsSectionProps) {
  return (
    <section className="bg-[#FFF8E7] py-16 sm:px-4 md:px-0">
  <div className="mx-auto w-full flex flex-col md:flex-row justify-between gap-32 max-w-[1312px]">
    {/* Left side: Heading + Link */}
    <div className="md:w-1/3">
      <h2 className="mb-8 text-5xl font-bold text-grey">Pricing FAQs</h2>

      <div className="mb-4">
        <Link href="/faqs" className="text-xl font-medium text-grey hover:text-grey-400">
          <span className="underline">See all FAQs </span>{"  "} →
        </Link>
      </div>
    </div>

    {/* Right side: Accordion */}
    <div className="md:w-2/3">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-b border-grey-400">
            <AccordionTrigger className="py-4 text-left text-2xl font-semibold text-grey no-underline hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="py-4 text-[18px] text-grey font-medium">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>

  )
}
