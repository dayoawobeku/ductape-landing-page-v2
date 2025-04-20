import type { UseCase } from "../types/use-case"

export const useCases: UseCase[] = [
  {
    id: "seamless-message-broker-management",
    title: "Seamless Message Broker Management",
    digit: "1",
    scenario: "You’re using RabbitMQ in production but want to switch to Kafka for a new staging setup to test performance.",
    helps: "With Ductape, you can configure different message brokers per environment and switch between them effortlessly—no need for code changes, just update the environment configuration.",
    matters: [
      "Reduces setup time",
      "Simplifies testing or migrating between brokers."
    ],
    bonus: "Ductape’s out-of-the-box monitoring and logging provide real-time insights into message delivery performance, latency issues, and failures, all managed directly through your code.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "flexible-database-integrations",
    title: "Flexible Database Integrations",
    digit: "2",
    scenario: "Your application uses PostgreSQL for production and MongoDB for analytics, but you want to swap the analytics database for DynamoDB.",
    helps: "Ductape allows you to plug and play with databases by abstracting the configuration. You can adapt your setup dynamically without modifying your core application logic.",
    matters: [
      "Enables fast iteration",
      "Reduces complexity when dealing with multiple databases."
    ],
    bonus: "Integrated observability features let you monitor query performance and identify bottlenecks in your database setups, ensuring your system remains optimized, with configurations handled in code.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#A3C6FB",
  },
  {
    id: "storage-provider-interoperability",
    title: "Storage Provider Interoperability",
    digit: "3",
    scenario: "You’re storing files in AWS S3 but need to run tests using Google Cloud Storage in a dev environment.",
    helps: "Ductape makes it easy to switch storage providers by updating your environment configuration. No more rewriting integration logic.",
    matters: [
      "Streamlines multi-environment setups",
      "Allows testing with alternative storage solutions."
    ],
    bonus: "Stay informed about file transfer times and provider-specific failures with built-in monitoring tools, all configured through your codebase.",
    chartImage: "/images/integrationdemo.svg",
    chartBackground: "#C4B1F9",
  },
  {
    id: "cloud-function-portability",
    title: "Cloud Function Portability",
    digit: "4",
    scenario: "You use AWS Lambda for your serverless functions in production but want to test a new region with Google Cloud Functions.",
    helps: "Ductape allows you to swap cloud function providers with ease. By updating your environment configurations, you can switch functions across providers without code changes.",
    matters: [
      "Makes cloud function management seamless across environments",
      "Ensures flexibility when scaling your infrastructure."
    ],
    bonus: "Monitor execution times, cost performance, and error rates across cloud function providers to optimize your stack, with observability managed directly in code.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FDF3E3",
  },
  {
    id: "notifier-flexibility",
    title: "Notifier Flexibility",
    digit: "5",
    scenario: "Your production system uses Twilio for SMS notifications, but you want to try out a cheaper alternative like Vonage for non-critical environments.",
    helps: "Configure notifiers per environment and easily switch services without touching the core notification logic.",
    matters: [
      "Saves time and lets you experiment with new tools without worrying about complex rewrites."
    ],
    bonus: "Monitor notification delivery rates and failure trends, so you’re always aware of what’s happening with your messaging, with all configurations handled in code.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "consistent-behavior-and-output-across-providers",
    title: "Consistent Behavior and Output Across Providers",
    digit: "6",
    scenario: "You need consistent API behavior regardless of which third-party provider you’re using.",
    helps: "Ductape enables you to define the behavior you want in your code, allowing you to handle differences between providers as needed. You set the rules for your product’s outputs, and Ductape provides the flexibility to implement and manage these rules.",
    matters: [
      "Standardizes outputs to prevent breaking changes when switching providers.",
      "Ensures seamless integration across your product’s workflows."
    ],
    bonus: "Monitor and validate data output consistency across providers to detect and resolve mismatches proactively, with observability features configured directly in your code.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#A3C6FB",
  },
  {
    id: "easily-switch-between-3rd-party-api-providers",
    title: "Easily Switch Between 3rd-Party API Providers",
    digit: "7",
    scenario: "You’re using a third-party payment gateway, but due to outages, higher costs, or new preferences, you want to switch to an alternative.",
    helps: "With Ductape, switching between API providers can be done in hours—not weeks—by updating configurations in your code. You can also define fallback providers to ensure uninterrupted service delivery during outages or provider-specific constraints.",
    matters: [
      "Prevents downtime and revenue loss during service outages.",
      "Allows you to adapt quickly to financial considerations or changes in service behavior."
    ],
    bonus: "Ductape helps you keep a finger on the pulse of API performance, tracking response times, error rates, and provider reliability, with monitoring and logging managed through your codebase.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#C4B1F9",
  },
  {
    id: "fallbacks-for-service-delivery",
    title: "Fallbacks for Service Delivery",
    digit: "8",
    scenario: "Your preferred SMS provider (e.g., Twilio) becomes unavailable, and you need to route messages through Vonage or another provider without interrupting your service.",
    helps: "Configure multiple fallback options directly in your code. If a provider becomes unavailable, Ductape ensures the request is routed to the next available service provider.",
    matters: [
      "Guarantees consistent service delivery.",
      "Reduces dependency on a single provider, lowering the risk of outages."
    ],
    bonus: "Visualize fallback usage patterns to identify underperforming providers or frequently failing services, with observability features configured in code.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FDF3E3",
  },
  {
    id: "real-time-product-health-monitoring",
    title: "Real-Time Product Health Monitoring",
    digit: "9",
    scenario: "Your app is experiencing performance bottlenecks, but it’s unclear if the issue is with your message broker, database, or third-party API.",
    helps: "Ductape provides integrated monitoring, offering insights into which services are underperforming. You’ll know: Which providers are causing errors or delays. Which components in your product are experiencing bottlenecks.",
    matters: [
      "Enables faster issue resolution by identifying problem areas.",
      "Provides transparency for informed decisions about your infrastructure."
    ],
    bonus: "All observability configurations are managed directly through your code, ensuring seamless integration with your development workflow.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#FEF3C7",
  },
  {
    id: "monetizing-your-apis-through-marketplace-integration",
    title: "Monetizing Your APIs Through Marketplace Integration",
    digit: "10",
    scenario: "You have developed a suite of APIs that offer valuable functionalities, such as data processing, authentication, or payment solutions. You aim to monetize these APIs by making them available to a broader audience through a marketplace, allowing other developers and businesses to integrate them into their applications.",
    helps: "Ductape enables you to publish your APIs as applications and services on a marketplace, providing a seamless platform for distribution and monetization. You can: Define Pricing and Access Rules: Set up flexible pricing models, such as pay-per-use or subscription-based plans, and control access to your APIs based on user roles or subscription tiers. Manage Environments and Versions: Easily deploy and manage different versions of your APIs across various environments, ensuring seamless updates and backward compatibility. Handle Subscriptions and Payments: Automate subscription management and payment processing, allowing you to focus on API development while ensuring timely revenue collection.",
    matters: [
      "Expand Your Reach: Expose your APIs to a wider audience, including developers and businesses seeking solutions to integrate into their applications.",
      "Streamline Monetization: Simplify the monetization process by automating subscription management and payment processing, ensuring a consistent revenue stream.",
      "Enhance Scalability: Easily scale your API offerings to accommodate growing demand and diverse customer needs."
    ],
    bonus: "Ductape’s integrated observability features allow you to monitor API usage, performance metrics, and user engagement, providing valuable insights to optimize your offerings and enhance customer satisfaction.",
    chartImage: "/images/HitRate.svg",
    chartBackground: "#D9D9D9",
  }
]