import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

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

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
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
    </>
  )
}
