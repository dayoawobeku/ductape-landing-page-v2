import type { FAQCategory } from "../types/faq"

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        id: "what-is-ductape",
        question: "What is Ductape?",
        answer: [
          "Ductape is a versatile framework designed to simplify product development by enabling seamless integration with various service providers. It allows you to manage configurations, monitor performance, and handle observability directly within your codebase, ensuring consistent behavior and output across different environments.",
        ],
      },
      {
        id: "how-facilitate-api-monetization",
        question: "How does Ductape facilitate API monetization?",
        answer: [
          "Ductape empowers you to monetize your APIs by enabling you to publish them as applications and services on a marketplace. You can define pricing and access rules, manage environments and versions, and handle subscriptions directly through your codebase. This streamlined approach allows you to receive monthly payments based on usage, simplifying the monetization process and providing a consistent revenue stream."
        ],
      },
      {
        id: "benefits-of-ductape-for-api-monetization",
        question: "What are the benefits of using Ductape for API monetization?",
        answer: [
          "Expanded Reach: Expose your APIs to a wider audience, including developers and businesses seeking solutions to integrate into their applications.",

          "Streamlined Monetization: Simplify the monetization process by automating subscription management and payment processing, ensuring consistent revenue streams.",

          "Enhanced Scalability: Scale your API offerings to accommodate growing demand and diverse customer needs.",

          "Integrated Observability: Monitor API usage, performance metrics, and user behavior to gain valuable insights that help you continuously improve your offerings and enhance customer satisfaction.",
        ],
      },
      {
        id: "import-api-services",
        question: "How can I import my API services into Ductape?",
        answer: [
          "Ductape allows you to import your API services through Postman and OpenAPI documentation. You can upload your API definitions in JSON format, enabling seamless integration into the Ductape framework."
        ],
      },
      {
        id: "define-authentication-rules",
        question: "How do I define authentication rules for my APIs in Ductape?",
        answer: [
          "After importing your API services, you can define authentication rules directly within the Ductape framework. This includes setting up authentication methods, access controls, and permissions to ensure secure and authorized access to your APIs."
        ],
      },
      {
        id: "process-for-publishing-apis",
        question: "What is the process for publishing my APIs to the marketplace?",
        answer: [
          "Once your APIs are configured and authenticated, you can submit them for approval to the Ductape management team. After a thorough review, your APIs will be published to the marketplace, making them available for consumption by other developers and businesses.",
        ],
      },
      {
        id: "handle-service-providers",
        question: "How does Ductape handle differences between service providers?",
        answer: [
          "Ductape abstracts the complexities of different service providers, allowing you to define the desired behavior and output in your code. This approach enables you to manage differences between providers effectively, ensuring consistent performance and functionality across various environments.",
        ],
      },
      {
        id: "suitable-for-applications",
        question: "Is Ductape suitable for both small projects and large-scale applications?",
        answer: [
          "Yes, Ductape is designed to be scalable and adaptable, making it suitable for projects of all sizes. Whether you’re developing a small application or a large-scale enterprise solution, Ductape provides the tools and flexibility needed to manage products, configurations, and observability effectively.",
        ],
      },
      {
        id: "security-in-api-products",
        question: "How does Ductape ensure security in API products?",
        answer: [
          "Ductape prioritizes security by providing robust authentication and authorization mechanisms for API products. It supports industry-standard security protocols and ensures that your APIs are protected against common security threats throughout the integration process.",
        ],
      },
      {
        id: "monitor-log-api-usage",
        question: "Can I monitor and log API usage with Ductape?",
        answer: [
          "Yes, Ductape offers built-in observability features that allow you to monitor API usage, track performance metrics, and log activities directly within your codebase. This integration provides real-time insights into your APIs’ performance and usage patterns, facilitating proactive management and optimization.",
        ],
      },
      {
        id: "get-started",
        question: "How do I get started with Ductape?",
        answer: [
          "To get started with Ductape, visit our Getting Started Guide for detailed instructions on installation, configuration, and integration. Our comprehensive documentation and support resources are available to assist you throughout the setup process.",
        ],
      },
      {
        id: "more-information",
        question: "Where can I find more information and support?",
        answer: [
          "For more information, visit our Documentation and Community Forum. If you have specific questions or need further assistance, feel free to contact our support team at support@ductape.com.",

          "If you have any other questions or need further assistance, please don’t hesitate to reach out to us",
        ],
      },
    ],
  },
  {
    id: "workspaces",
    title: "Workspaces",
    questions: [
      {
        id: "what-is-workspace",
        question: "What is a workspace?",
        answer: [
          "A Ductape workspace is a shared environment where a team can collaborate, with its own connected APIs, environment variables, webhooks and event listeners, logs and monitoring, auth settings, and packaged workflows or features.",
        ],
      },
      {
        id: "how-many-workspaces",
        question: "How many workspaces can you belong to?",
        answer: [
          "You can belong to unlimited workspaces on any plan, but the number of users per workspace is limited based on your plan.",
          "Free Plan: Up to 2 users per workspace",
          "Beginner Plan: Up to 5 users per workspace",
          "Startup Plan: Up to 15 users per workspace",
          "Enterprise Plan: Unlimited users per workspace",
          "So while you can join or create as many workspaces as you like, each workspace’s user capacity depends on its plan."
        ],
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    questions: [
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
    ],
  },
]
