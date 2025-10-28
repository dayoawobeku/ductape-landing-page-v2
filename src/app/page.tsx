"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    name: "Developers",
    path: "https://docs.ductape.app",
  },
  {
    name: "Use Cases",
    path: "/use-cases",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "FAQS",
    path: "/faqs",
  },
];

/**https://docs.ductape.app */

function QuickLinks() {
  const sections = [
    {
      title: "Products",
      links: [
        { name: "Ductape Marketplace", path: "" },
        { name: "Ductape Cloud", path: "" },
        { name: "Ductape CLI", path: "" },
        { name: "Ductape SDK", path: "" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Developers", path: "" },
        { name: "Documentation", path: "" },
        { name: "Demo", path: "" },
        { name: "Join Discord", path: "" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Use Cases", path: "/use-cases" },
        { name: "Contact", path: "" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Developer Policy", path: "" },
        { name: "Terms of Use", path: "/terms-of-use" },
      ],
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <div key={index}>
          <p className="text-grey-200 text-base font-medium py-2">
            {section.title}
          </p>
          <nav>
            <ul>
              {section.links.map((link, ind) => (
                <li key={ind} className="py-2">
                  <Link
                    href={link.path}
                    className="text-base text-white font-medium hover:text-grey-400"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </>
  );
}

interface DownloadButtonProps {
  className?: string;
}

function DownloadButton({ className = "" }: DownloadButtonProps) {
  const isPrimary = className.includes("bg-primary");

  return (
    <Link
      href="https://www.npmjs.com/package/@ductape/sdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className={`w-full max-w-[235px] h-[56px] rounded-[100px] px-[25px] py-[14px] flex items-center gap-[15px] bg-white text-primary hover:text-primary hover:shadow-lg ${className}`}
        variant="ghost"
      >
        <Image
          src={
            isPrimary
              ? "/images/downloadversion2.svg"
              : "/images/downlodversion.svg"
          }
          alt="Download version"
          className="w-6 h-6"
          width={24}
          height={24}
        />
        <span className="text-base font-semibold">Download Ductape</span>
      </Button>
    </Link>
  );
}

// const featuresCards = [
//   {
//     icon: "/images/AR.svg",
//     title: "Fast Third-Party Integrations",
//     description:
//       "Quickly implement third-party API actions and services in your codebase.",
//   },
//   {
//     icon: "/images/rocket.svg",
//     title: "Reusable Components",
//     description:
//       "Standardize your approach to APIs, databases, notifications, and cloud functions.",
//   },
//   {
//     icon: "/images/gear-AI.svg",
//     title: "Event-Driven Features",
//     description:
//       "Build and monitor robust event workflows with retries and error handling baked in.",
//   },
//   {
//     icon: "/images/target.svg",
//     title: "Background Jobs & Functions",
//     description:
//       "Create scalable, fault-tolerant jobs and serverless functions.",
//   },
//   {
//     icon: "/images/terminal.svg",
//     title: "Unified Communication",
//     description:
//       "Manage emails and notifications across services without extra complexity.",
//   },
//   {
//     icon: "/images/code-2.svg",
//     title: "Monitor Everything",
//     description:
//       "Keep tabs on all actions, events, and jobs across all environments in real time.",
//   },
// ];

export default function Homepage() {
  const [isFading, setIsFading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsFading(false);
    }, 0);
  };

  return (
    <main className="bg-[#FFFDF9]">
      <header className="relative text-center bg-[url('/images/auth-bg.png')] bg-cover bg-center bg-no-repeat text-white pb-20 lg:pb-48 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/images/overlay.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-20 before:mix-blend-overlay before:z-[-1]">
        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-4 md:py-6">
          <Link href = "#">
          <div role="img" aria-label="Ductape Logo">
            <p className="text-white text-2xl md:text-3xl font-black uppercase leading-9">
              ductape
            </p>
          </div>
          </Link>

          <nav
            className={`hidden lg:flex items-center justify-center gap-4 md:gap-6 lg:gap-10 transition-opacity duration-300 ${
              isFading ? "opacity-50" : "opacity-100"
            }`}
          >
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                rel="noopener noreferrer"
                className="font-medium text-base text-white hover:no-underline"
                onClick={() => handleClick()}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-3 md:gap-4 items-center">
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
            <Link
              href="https://cloud.ductape.app"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden lg:inline-block font-medium text-base bg-transparent border-0 text-white hover:no-underline"
            >
              Login
            </Link>
            <DownloadButton />
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-4 py-4 bg-primary bg-opacity-80 w-full absolute top-0 left-0 z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-6 text-white text-2xl"
            >
              ✖
            </button>

            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                rel="noopener noreferrer"
                onClick={() => {
                  handleClick();
                  setMenuOpen(false);
                }}
                className="text-white hover:no-underline"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://cloud.ductape.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-base bg-transparent border-0 text-white hover:no-underline"
            >
              Login
            </Link>
          </div>
        )}

        <div className="text-center py-20 md:py-32 mx-auto flex flex-col items-center px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            <span className="relative inline-flex items-center justify-center px-3">
              <Image
                className="absolute build-img -top-6 w-[100px] h-[80px] sm:w-[110px] sm:h-[80px] md:w-[160px] md:h-[130px] sm:-top-6 md:-top-12 rotate-[9.5]"
                src="/images/buildcircle.png"
                width={160}
                height={130}
                alt="build circle"
                loading="lazy"
              />
              Move
            </span>
            fast without breaking things
          </h1>
          <p className="text-base md:text-xl font-medium max-w-[90%] md:max-w-[780px] my-5">
            Ductape helps you easily and quickly compose, debug, and reuse backend components.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 py-8">
            <DownloadButton />
            <Link
              href="https://docs.ductape.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full md:w-[211px] h-[56px] rounded-full border border-gray-300 flex items-center justify-center gap-3 hover:shadow-lg">
                Read Documentation
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-[-10%] sm:bottom-[-20%] lg:bottom-[-30%] left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center max-w-full">
          <Image
            src="/images/lightscreen.png"
            alt="screen image"
            className="block w-auto rounded-bl-md rounded-br-md max-w-[90%] lg:max-w-[750px]"
            width={750}
            height={537}
            priority
          />
        </div>

        <div className="absolute bottom-[-1px] left-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#FFFDF9"
              d="M0,218 Q720,450 1440,192 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
      </header>

      <section className="mt-36 md:mt-96 px-6 md:px-12 lg:px-16 bg-[#FFFDF9]">
        <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-[542px] text-center md:text-center lg:text-left text-[#475569]">
            <div className="mb-8 border-l-4 border-primary p-4 bg-transparent hover:bg-[#e6ebff]">
        <h4 className="text-xl font-semibold text-[#0f172a] mb-2">1. Import or paste endpoints</h4>
        <p>Paste a URL or upload a Postman collection. Ductape turns each into a function you can call.</p>
      </div>

      <div className="mb-8 border-l-4 border-primary p-4 bg-transparent hover:bg-[#e6ebff]">
        <h4 className="text-xl font-semibold text-[#0f172a] mb-2">2. Treat backend components like functions</h4>
        <p>Databases, storage, notifiers, and more can be connected as callable functions in your workflows.</p>
      </div>

      <div className="mb-8 border-l-4 border-primary p-4 bg-transparent hover:bg-[#e6ebff]">
        <h4 className="text-xl font-semibold text-[#0f172a] mb-2">3. Compose backend features</h4>
        <p>Chain functions, database calls, and custom logic into end-to-end workflows.</p>
      </div>

      <div className="mb-8 border-l-4 border-primary p-4 bg-transparent hover:bg-[#e6ebff]">
        <h4 className="text-xl font-semibold text-[#0f172a] mb-2">4. Run and debug with confidence</h4>
        <p>Execute your workflows, trace each step, inspect inputs and outputs, and fix issues fast.</p>
      </div>

      <div className="mb-8 border-l-4 border-primary p-4 bg-transparent hover:bg-[#e6ebff]">
        <h4 className="text-xl font-semibold text-[#0f172a] mb-2">5. Share with your team</h4>
        <p>Once a workflow works, share it with teammates for reuse or further iteration.</p>
      </div>
          </div>

          <section className="text-[#e2e8f0] rounded-xl bg-[#1e293b] px-4 py-5 w-full max-w-[600px] border border-[#334155]">
      <h4 className="text-[#e2e8f0] my-4 text-xl font-semibold">
        Example: User Onboarding Flow
      </h4>
      <pre className="text-sm border-0 overflow-auto rounded-[8px] p-4 leading-6 bg-[#0f172a]">
        <code>
{`// Example Ductape feature sequence
const onboardingFlow: IFeatureSequence = {
  tag: 'user_onboarding',
  events: [
    {
      type: FeatureEventTypes.ACTION,
      event: 'create_user',
      input: { name: '$Input{name}', email: '$Input{email}' },
      retries: 1,
      allow_fail: false,
    },
    {
      type: FeatureEventTypes.ACTION,
      event: 'assign_default_roles',
      input: { userId: '$Output{create_user.id}' },
      retries: 1,
      allow_fail: false,
    },
    {
      type: FeatureEventTypes.NOTIFICATION,
      event: 'send_welcome_email',
      input: { email: '$Input{email}' },
      retries: 2,
      allow_fail: true,
    },
  ],
};`}
        </code>
      </pre>
    </section>

          
        </div>
      </section>

      <div className="bg-[#fdf3e3] py-16 mt-20">
      <section className="m-auto px-6 md:px-12 lg:px-16 max-w-[1440px] text-center">
        <h3 className = "text-[32px] font-bold text-[#0f172a] mb-8">Powerful Features for Modern Development</h3>
        <div className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
         
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-sm hover:border-primary hover:shadow-[0_8px_25px_rgba(37,99,235,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-in-out">
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shrink-0 bg-gradient-to-br from-primary to-primary/80">
      ⚡
    </div>
    <h4 className="text-xl font-semibold text-[#0f172a] m-0">Fast Third-Party Integrations</h4>
  </div>
  <p className="text-[#64748b] leading-relaxed m-0">
    Quickly implement third-party API actions and services in your codebase.
  </p>
</div>


                    <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-sm hover:border-primary hover:shadow-[0_8px_25px_rgba(37,99,235,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-in-out">

            <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shrink-0 bg-gradient-to-br from-primary to-primary/80">
🔧</div>
              <h4 className="text-xl font-semibold text-[#0f172a] m-0">Reusable Components</h4>
            </div>
            <p className="text-[#64748b] leading-relaxed m-0">Standardize your approach to APIs, databases, notifications, and cloud functions.</p>
          </div>

                    <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-sm hover:border-primary hover:shadow-[0_8px_25px_rgba(37,99,235,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-in-out">

            <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shrink-0 bg-gradient-to-br from-primary to-primary/80">
🔄</div>
              <h4 className="text-xl font-semibold text-[#0f172a] m-0">Event-Driven Features</h4>
            </div>
            <p className="text-[#64748b] leading-relaxed m-0">Build and monitor robust event workflows with retries and error handling baked in.</p>
          </div>

                    <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-sm hover:border-primary hover:shadow-[0_8px_25px_rgba(37,99,235,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-in-out">

            <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shrink-0 bg-gradient-to-br from-primary to-primary/80">
⚙️</div>
              <h4 className="text-xl font-semibold text-[#0f172a] m-0">Background Jobs & Functions</h4>
            </div>
            <p className="text-[#64748b] leading-relaxed m-0">Create scalable, fault-tolerant jobs and serverless functions.</p>
          </div>

                    <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-sm hover:border-primary hover:shadow-[0_8px_25px_rgba(37,99,235,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-in-out">

            <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shrink-0 bg-gradient-to-br from-primary to-primary/80">
📧</div>
              <h4 className="text-xl font-semibold text-[#0f172a] m-0">Unified Communication</h4>
            </div>
            <p className="text-[#64748b] leading-relaxed m-0">Manage emails and notifications across services without extra complexity.</p>
          </div>

                    <div className="bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-sm hover:border-primary hover:shadow-[0_8px_25px_rgba(37,99,235,0.1)] hover:-translate-y-[2px] transition-all duration-200 ease-in-out">

            <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shrink-0 bg-gradient-to-br from-primary to-primary/80">
📊</div>
              <h4 className="text-xl font-semibold text-[#0f172a] m-0">Monitor Everything</h4>
            </div>
            <p className="text-[#64748b] leading-relaxed m-0">Keep tabs on all actions, events, and jobs across all environments in real time.</p>
          </div>
        </div>
      </section>
    </div>

      

      <section
        aria-labelledby="testimonials"
        className="bg-[#1e40af] px-6 md:px-12 lg:px-16 py-16"
      ><div className="max-w-[1440px] mx-auto">
  <h2
    id="testimonials"
    className="text-3xl md:text-[32px] leading-[40px] md:leading-[60px] font-bold text-white w-full md:w-[50%] pr-0 md:pr-2"
  >
    Who the product is for?
  </h2>

  {/* <p className="text-lg md:text-xl leading-[26px] md:leading-[30px] font-semibold text-grey py-3 w-full md:w-[70%] pr-0 md:pr-2">
    Here’s what some of them are saying
  </p> */}

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">

    {/* Card 1 */}
    <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl p-8 md:p-10 shadow-[0_2px_6px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-200 ease-in-out hover:border-[rgba(255,255,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] hover:bg-[rgba(255,255,255,0.15)] lg:col-span-2">
      <p className="text-lg  text-[#e2e8f0] font-medium text-center">
        Backend engineers building partner integrations.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl p-8 md:p-10 shadow-[0_2px_6px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-200 ease-in-out hover:border-[rgba(255,255,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] hover:bg-[rgba(255,255,255,0.15)] lg:col-span-2">
      <p className="text-lg  text-[#e2e8f0] font-medium">
        Frontend developers trying to call backend APIs directly in their code, without managing complex backend setups.
      </p>
    </div>

    <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl p-8 md:p-10 shadow-[0_2px_6px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-200 ease-in-out hover:border-[rgba(255,255,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] hover:bg-[rgba(255,255,255,0.15)] lg:col-span-2">
      <p className="text-lg  text-[#e2e8f0] font-medium text-center">
        Startups accelerating feature builds without reinventing infrastructure.
      </p>
    </div>

    <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl p-8 md:p-10 shadow-[0_2px_6px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-200 ease-in-out hover:border-[rgba(255,255,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] hover:bg-[rgba(255,255,255,0.15)] lg:col-span-2">
      <p className="text-lg  text-[#e2e8f0] font-medium text-center">
        Team leads wanting visibility into what their backend systems actually do.
      </p>
    </div>

  </div>
</div>

      </section>

      <footer className="bg-[#1B1B1B] text-white px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <section className="text-center py-16 md:py-24 flex flex-col items-center max-w-[718px] mx-auto">
            <p className="text-2xl md:text-4xl font-semibold leading-[3rem] md:leading-[4rem] w-full px-4 md:px-0">
              Get started today and transform the way you build
            </p>
            <p className="text-lg md:text-xl font-medium w-full max-w-[780px] px-4 md:px-10 py-5">
              Ductape gives you the tools to create, integrate, and manage
              components and services at breakneck speed without sacrificing
              reliability or control.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-8 md:py-10">
              <DownloadButton className="bg-primary text-white hover:bg-primary hover:text-white hover:shadow-lg" />
              <Link
                href="https://discord.gg/JHXxQ6MAwb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  className="w-full md:w-[235px] h-[56px] rounded-[100px] px-6 py-4 border border-gray-300 flex items-center justify-center gap-4 hover:bg-opacity-10 hover:text-white"
                >
                  <Image
                    src="/images/discord.svg"
                    alt="Join Discord"
                    width={24}
                    height={18}
                  />
                  <span>Join our Discord Channel</span>
                </Button>
              </Link>
            </div>
          </section>

          <section className="max-w-[1506px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left border-y border-[#444444] py-16">
            <QuickLinks />
          </section>
          <div className="flex flex-col md:flex-row items-center justify-between pt-16 pb-8 px-6 md:px-16 gap-6 md:gap-0">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
              <div role="img" aria-label="Ductape Logo">
                <p className="text-white text-2xl md:text-[2rem] font-black uppercase leading-9">
                  ductape
                </p>
              </div>
              <p className="text-sm md:text-base font-medium text-center md:text-left">
                © Ductape Technologies 2025
              </p>
            </div>

            <div className="flex items-center gap-5 justify-center">
              <Link
                href="https://www.linkedin.com/company/ductape-technologies"
                className="text-sm md:text-base font-semibold underline text-white"
              >
                LINKEDIN
              </Link>
              <Link
                href=""
                className="text-sm md:text-base font-semibold underline text-white"
              >
                GITHUB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
