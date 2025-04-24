import { FAQ } from "../types/faq";

export const faqItems: FAQ[] = [
  {
    id: "question-number-1",
    question: "Do you charge for extra actions when I go over my limit?",
    answer: [
      "Yes. If you exceed your plan’s monthly limits (API requests or file transfer), you’ll be billed for overages:",
      "API Requests: $0.00001 per request",
      "File Transfers: $0.0075 per GB"
    ],
  },
  {
    id: "question-number-2",
    question: "When will I be billed?",
    answer: [
      "You’ll be billed monthly on your subscription date. For Enterprise customers, custom billing cycles may be arranged.",
    ],
  },
  {
    id: "question-number-3",
    question: "Are you going to change your pricing in the future?",
    answer: [
      "We may adjust pricing as Ductape evolves, but any changes will be communicated clearly in advance. Existing customers will be given options to stay on their current plan or transition to new ones where applicable.",
    ],
  },
  {
    id: "question-number-4",
    question: "What happens if I go over my request or file transfer limits?",
    answer: [
      "You’ll still be able to use Ductape, but you’ll be billed for any overages at your plan’s rate",
    ],
  },
  {
    id: "question-number-5",
    question: "How much do overages cost for each plan?",
    answer: [
      "Free Plan:",
      "API Requests: $0.000025/request",
      "File Transfer: $0.0125/GB",
      "Beginner Plan:",
      "API Requests: $0.00002/request",
      "File Transfer: $0.010/GB",
      "Startup Plan:",
      "API Requests: $0.000015/request",
      "File Transfer: $0.008/GB",
    ],
  },
  {
    id: "question-number-6",
    question: "Will I be notified before hitting my limits?",
    answer: [
      "Yes. Ductape alerts you when you’re approaching your usage limits so you can monitor or upgrade your plan before incurring charges.",
    ],
  },
  {
    id: "question-number-7",
    question: "Do overages roll over to the next month?",
    answer: [
      "No. Usage limits reset at the beginning of each billing cycle. Overage charges only apply to the current month.",
    ],
  },
]
