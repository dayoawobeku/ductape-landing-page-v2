export interface FAQ {
  id: string
  question: string
  answer: string | string[]
}

export interface FAQCategory {
  id: string
  title: string
  questions: FAQ[]
}
