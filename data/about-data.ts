import type { CoreValue, WhyDuctapeReason } from "../types/about"

export const coreValues: CoreValue[] = [
  {
    id: "composability",
    title: "Composability",
    description:
      "We enable you to construct sophisticated solutions by combining modular, reusable components. This approach simplifies development and makes it easier to adapt and scale as your needs evolve.",
    imageSrc: "/images/developmentdemo.svg",
  },
  {
    id: "portability",
    title: "Portability",
    description:
      "Our backend resources are designed to work seamlessly across various environments—whether you're deploying to the cloud, on-premises, or within a hybrid setup. This flexibility ensures that your solutions remain consistent and future-proof no matter where your operations take you.",
    imageSrc: "/images/env.svg",
  },
]

export const whyDuctapeReasons: WhyDuctapeReason[] = [
  {
    id: "resilience",
    title: "Resilience",
    description:
      "Our components deliver consistent performance, even in extreme environments, ensuring that your systems remain robust under pressure.",
  },
  {
    id: "flexibility",
    title: "Flexibility",
    description:
      "Customize your system by selecting only the resources you need, making it easier to meet new challenges without overwhelming your architecture.",
  },
  {
    id: "scalability",
    title: "Scalability",
    description:
      "Built to grow with your business, our modular approach supports smooth expansion and continuous evolution of your infrastructure.",
  },
  {
    id: "interoperability",
    title: "Interoperability",
    description:
      "Seamlessly connect diverse elements of your tech ecosystem to create unified solutions that work harmoniously together.",
  },
]
