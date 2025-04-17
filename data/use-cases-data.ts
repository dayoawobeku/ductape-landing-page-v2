import type { UseCase } from "../types/use-case"

export const useCases: UseCase[] = [
  {
    id: "api-management",
    title: "API-First Digital Asset Management",
    description:
      "Ductape enables organizations to build, manage, and monetize APIs as digital assets, creating new revenue streams while maintaining control over access and usage.",
    keyPoints: [
      "Centralized API management with comprehensive visibility",
      "Flexible monetization models including subscription, pay-per-use, and tiered pricing",
      "Detailed analytics and reporting on API usage and performance",
      "Automated documentation and developer portal generation",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "data-integration",
    title: "Data Integration Orchestration",
    description:
      "Streamline complex data flows between disparate systems with Ductape's integration capabilities, reducing development time and maintenance overhead.",
    keyPoints: [
      "Connect legacy systems with modern applications seamlessly",
      "Transform and normalize data formats automatically",
      "Schedule and monitor data synchronization jobs",
      "Implement error handling and retry mechanisms",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "microservices",
    title: "Microservice Interoperability",
    description:
      "Enable smooth communication between microservices with standardized interfaces, reducing complexity and accelerating development cycles.",
    benefits: [
      "Simplified service discovery and registration",
      "Consistent error handling and retry policies",
      "Centralized monitoring and observability",
      "Standardized authentication and authorization",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "iot-platform",
    title: "IoT Device Connectivity",
    description:
      "Connect, manage, and process data from IoT devices at scale with Ductape's specialized IoT integration capabilities.",
    keyPoints: [
      "Support for multiple IoT protocols (MQTT, CoAP, HTTP)",
      "Edge computing capabilities for local data processing",
      "Device provisioning and management",
      "Real-time data streaming and analytics",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "fintech",
    title: "Fintech Integrations",
    description:
      "Securely connect with financial services APIs and build compliant fintech applications with Ductape's specialized financial connectors.",
    keyPoints: [
      "Pre-built integrations with major payment processors and banking APIs",
      "Compliance with financial data security standards",
      "Transaction monitoring and fraud detection capabilities",
      "Support for real-time payment processing",
    ],
    caseStudy:
      "A leading fintech startup reduced their integration time by 60% and achieved PCI DSS compliance using Ductape's financial connectors.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "ai-ml-integration",
    title: "AI and Machine Learning Model Integration",
    description:
      "Seamlessly incorporate AI and ML models into your applications with Ductape's specialized connectors and deployment tools.",
    benefits: [
      "Deploy models from popular frameworks (TensorFlow, PyTorch, scikit-learn)",
      "Version control for model deployments",
      "A/B testing capabilities for model performance comparison",
      "Monitoring and observability for model performance",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "healthcare",
    title: "Healthcare Systems Integration",
    description:
      "Connect disparate healthcare systems while maintaining HIPAA compliance and ensuring patient data security.",
    keyPoints: [
      "FHIR and HL7 protocol support",
      "HIPAA-compliant data handling",
      "Secure patient data exchange",
      "Integration with EHR/EMR systems",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "retail-ecommerce",
    title: "Retail and E-commerce Integrations",
    description:
      "Unify your e-commerce ecosystem by connecting storefronts, inventory systems, payment processors, and fulfillment services.",
    benefits: [
      "Omnichannel inventory synchronization",
      "Real-time order processing and tracking",
      "Customer data unification across touchpoints",
      "Integration with major e-commerce platforms and marketplaces",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "devops",
    title: "DevOps Toolchain Integration",
    description: "Streamline your development pipeline by connecting various DevOps tools and automating workflows.",
    keyPoints: [
      "CI/CD pipeline integration and automation",
      "Infrastructure as Code (IaC) support",
      "Monitoring and alerting system integration",
      "Deployment automation across environments",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "saas-integration",
    title: "SaaS Platform Extensibility",
    description:
      "Extend your SaaS platform's capabilities by enabling seamless third-party integrations and building a robust ecosystem.",
    benefits: [
      "Developer-friendly API design and documentation",
      "OAuth-based authentication and authorization",
      "Webhook support for event-driven integrations",
      "Partner onboarding and certification processes",
    ],
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
]
