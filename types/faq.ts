export interface FAQ {
  id: string
  question: string
  answer: string[]
}

export interface FAQCategory {
  id: string
  title: string
  questions: FAQ[]
}
