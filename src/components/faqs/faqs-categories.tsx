"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import type { FAQCategory } from "../../../types/faq"

interface FAQsCategoriesProps {
  categories: FAQCategory[]
}

export default function FAQsCategories({ categories }: FAQsCategoriesProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})

  

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }))
  }

  return (
    <div className="space-y-8 px-6 md:px-0">
      {categories.map((category) => (
        <div key={category.id} className=" pb-4 flex w-full items-start flex-col md:flex-row md:gap-20 lg:gap-0">
          <div
            
            className="flex justify-between items-center w-full text-left py-4 lg:w-2/4 md:w-1/4"
          >
            <h2 className="text-4xl font-bold text-grey">{category.title}</h2>
            
          </div>

          
            <div className="mt-4 space-y-4 w-full md:w-full lg:w-3/4">
              {category.questions.map((question) => (
                <div key={question.id} className="border-b border-grey-400 rounded-lg overflow-hidden w-full">
                  <button
                    onClick={() => toggleQuestion(question.id)}
                    className="flex justify-between items-center w-full text-left p-4"
                  >
                    <h3 className="text-xl font-semibold text-grey">{question.question}</h3>
                    {expandedQuestions[question.id] ? (
                      <Minus className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {expandedQuestions[question.id] && (
                    <div className="p-4">
                      <div className="prose prose-blue max-w-none text-grey">
                        {question.answer.map((paragraph, idx) => (
                          <p key={idx} className="mb-4 last:mb-0 text-lg font-medium ">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          
        </div>
      ))}
    </div>
  )
}
