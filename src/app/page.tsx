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
      href="https://www.npmjs.com/package/ductape-sdk"
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

const featuresCards = [
  {
    icon: "/images/AR.svg",
    title: "Fast Third-Party Integrations",
    description:
      "Quickly implement third-party API actions and services in your codebase.",
  },
  {
    icon: "/images/rocket.svg",
    title: "Reusable Components",
    description:
      "Standardize your approach to APIs, databases, notifications, and cloud functions.",
  },
  {
    icon: "/images/gear-AI.svg",
    title: "Event-Driven Features",
    description:
      "Build and monitor robust event workflows with retries and error handling baked in.",
  },
  {
    icon: "/images/target.svg",
    title: "Background Jobs & Functions",
    description:
      "Create scalable, fault-tolerant jobs and serverless functions.",
  },
  {
    icon: "/images/terminal.svg",
    title: "Unified Communication",
    description:
      "Manage emails and notifications across services without extra complexity.",
  },
  {
    icon: "/images/code-2.svg",
    title: "Monitor Everything",
    description:
      "Keep tabs on all actions, events, and jobs across all environments in real time.",
  },
];

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
              Build
            </span>
            fast without breaking things
          </h1>
          <p className="text-base md:text-xl font-medium max-w-[90%] md:max-w-[780px] mt-4">
            Ductape empowers developers to create reusable components, integrate
            third-party apps, and build complex, scalable, and monitored systems
            in code—all in hours, not weeks.
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
          <div className="max-w-[542px] text-center md:text-center lg:text-left">
            <p className="text-lg md:text-xl leading-6 md:leading-8 font-semibold text-[#5F5F5F] py-2 md:py-3">
              A FULL SERVICE API MARKETPLACE
            </p>
            <h2 className="text-3xl md:text-5xl leading-8 md:leading-[60px] font-bold text-grey">
              Innovate faster, and better, than the competition
            </h2>
            <p className="text-base md:text-xl font-medium text-grey py-3 md:py-4">
              Streamline development with tools to manage APIs, events, jobs,
              and more—while ensuring your product is resilient and observable
              in every environment.
            </p>
            <div className="md:flex md:justify-center lg:justify-start">
              <Link
                href="https://docs.ductape.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-[211px] h-[56px] rounded-full px-6 py-3 border flex items-center justify-center gap-3 bg-white border-[#5F5F5F] text-grey hover:shadow-lg hover:bg-white hover:text-grey mx-auto md:mx-0">
                  Read Documentation
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-lg rotate-[-3deg]"></div>
              <Image
                src="/images/female.svg"
                alt="a woman pressing a laptop"
                className="relative rotate-3 w-[150px] sm:w-[180px] md:w-[230px] lg:w-[283px]"
                width={283}
                height={495}
              />
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-lg rotate-[-3deg]"></div>
              <Image
                src="/images/male.svg"
                alt="a backview of a man"
                className="relative rotate-3 w-[150px] sm:w-[180px] md:w-[230px] lg:w-[283px]"
                width={283}
                height={495}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-20 md:mt-40  px-4 bg-[#FFFDF9]">
        <div className="max-w-[90%] md:max-w-[1149px] mx-auto">
          <div>
            <p className="text-lg md:text-xl leading-6 md:leading-[30px] font-semibold text-[#5F5F5F] py-2 md:py-3">
              WHY DUCTAPE?
            </p>
            <p className="text-2xl md:text-5xl leading-8 md:leading-[60px] font-bold text-grey">
              The Ultimate Platform for Building and Integrating Backend
              Components
            </p>
            <div className="flex items-center justify-center py-4">
              <DownloadButton className="bg-primary text-white fill-white hover:bg-primary hover:text-white hover:shadow-lg px-6 py-3 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 py-12 bg-[#FFFDF9]">
        <div className="max-w-[1312px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="md:col-span-2 lg:col-span-3 bg-[#A3C6FB] p-6 md:p-10 rounded-lg shadow-md text-center md:text-left">
              <p className="text-2xl md:text-4xl font-bold text-grey">
                Integrate at Lightning Speed
              </p>
              <p className="mt-2 text-grey text-sm md:text-base font-medium">
                Discover and use third-party apps and services effortlessly.
                Import API actions and use them in code in hours, not weeks.
              </p>
              <Image
                src="/images/integrationdemo.svg"
                alt="Integration Image"
                className="mx-auto mt-4"
                width={500}
                height={251}
              />
            </div>

            <div className="bg-[#C4B1F9] p-6 md:p-10 text-center rounded-lg shadow-md lg:col-span-2">
              <Image
                src="/images/developmentdemo.svg"
                alt="Development Image"
                className="mx-auto"
                width={369}
                height={214}
              />
              <p className="text-2xl md:text-4xl font-bold text-grey mt-4">
                Simplify Development
              </p>
              <p className="mt-2 text-grey text-sm md:text-base font-medium">
                Define and work with simple components that are automatically
                reusable and configured for multiple environments and versions.
              </p>
            </div>

            <div className="bg-[#FFE27B] p-6 md:p-10 text-center rounded-lg shadow-md lg:col-span-2">
              <Image
                src="/images/HitRate.svg"
                alt="Hit Rate"
                className="mx-auto"
                width={369}
                height={214}
              />
              <p className="text-2xl md:text-4xl font-bold text-grey mt-4">
                Stay Resilient
              </p>
              <p className="mt-2 text-grey text-sm md:text-base font-medium">
                Handle downtime with automatic retries, failovers, and provider
                switching.
              </p>
            </div>

            <div className="md:col-span-2 lg:col-span-3 bg-[#A3C6FB] p-6 md:p-10 rounded-lg shadow-md text-center md:text-left">
              <p className="text-2xl md:text-4xl font-bold text-grey">
                Full Visibility Across Environments
              </p>
              <p className="mt-2 text-grey text-sm md:text-base font-medium">
                See what’s happening in your system—from dev to production—and
                catch issues instantly.
              </p>
              <Image
                src="/images/env.svg"
                alt="Environment"
                className="mx-auto mt-4 md:mt-10"
                width={500}
                height={251}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 text-center mt-20 bg-[#1B1B1B] text-white py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[833px] mx-auto">
            <p className="text-lg md:text-xl leading-6 md:leading-7 font-semibold py-3">
              THE DUCTAPE ADVANTAGE
            </p>
            <p className="text-3xl md:text-5xl leading-8 md:leading-[60px] font-bold">
              Reduce development time and accelerate time-to-market
            </p>
            <div className="flex items-center justify-center py-4">
              <Link
                href="https://docs.ductape.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full md:w-[211px] h-[56px] rounded-full px-6 py-3 border flex items-center justify-center gap-3 hover:shadow-lg border-primary">
                  Read Documentation
                </Button>
              </Link>
            </div>
          </div>

          <div className=" max-w-[1506px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4 md:px-0">
            {featuresCards.map((card, index) => (
              <div
                key={index}
                className="bg-transparent text-white p-6 rounded-lg shadow-sm text-start"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10 mb-4"
                  width={40}
                  height={40}
                />
                <p className="text-xl md:text-2xl font-semibold">
                  {card.title}
                </p>
                <p className="text-base md:text-lg font-medium my-2">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="testimonials"
        className="bg-[#FDF3E3] px-6 md:px-12 lg:px-16 py-16"
      >
        <div className="max-w-[1440px] mx-auto">
          <h2
            id="testimonials"
            className="text-3xl md:text-5xl leading-[40px] md:leading-[60px] font-bold text-grey w-full md:w-[50%] pr-0 md:pr-2"
          >
            Why are developers choosing Ductape?
          </h2>
          <p className="text-lg md:text-xl leading-[26px] md:leading-[30px] font-semibold text-grey py-3 w-full md:w-[70%] pr-0 md:pr-2">
            Here’s what some of them are saying
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-md lg:col-span-2">
              <p className="text-lg md:text-2xl text-grey font-semibold pb-4">
                “What used to take weeks to implement now takes hours with
                Ductape. From third-party APIs to event-driven workflows,
                everything just works.”
              </p>
              <div>
                <span className="block text-lg md:text-xl leading-[30px] md:leading-[34px] text-grey font-semibold">
                  Oladayo Olawuni
                </span>
                <span className="block text-base text-grey">Ductape</span>
              </div>
            </div>
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-md lg:col-span-2">
              <p className="text-lg md:text-2xl text-grey font-semibold pb-4">
                “What used to take weeks to implement now takes hours with
                Ductape. From third-party APIs to event-driven workflows,
                everything just works.”
              </p>
              <div>
                <span className="block text-lg md:text-xl leading-[30px] md:leading-[34px] text-grey font-semibold">
                  Oladayo Olawuni
                </span>
                <span className="block text-base text-grey">Ductape</span>
              </div>
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
              components and services at breakneck speed—without sacrificing
              reliability or control.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-8 md:py-10">
              <DownloadButton className="bg-primary text-white hover:bg-primary hover:text-white hover:shadow-lg" />
              <Link
                href="https://discord.gg/kAvdDney"
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
