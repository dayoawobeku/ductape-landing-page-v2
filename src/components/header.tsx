"use client";
import Link from "next/link"
import { useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";

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


interface DownloadButtonProps {
  className?: string;
}

function DownloadButton({ className = "" }: DownloadButtonProps) {

  return (
    <Link
      href="https://www.npmjs.com/package/@ductape/sdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className={`w-full max-w-[235px] h-[56px] rounded-[100px] px-[25px] py-[14px] flex items-center gap-[15px] text-white bg-primary hover:bg-primary hover:shadow-lg ${className}`}
        variant="ghost"
      >
        <Image
          src= "/images/downloadversion2.svg"
            
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

export default function Header() {

  const [isFading, setIsFading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleClick = () => {
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
      }, 30);
    };
  return (
    <header className="relative text-center bg-cover bg-center bg-no-repeat text-grey pb-20">
        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-4 md:py-6">
          
          <div role="img" aria-label="Ductape Logo">
          <Link href="./">
          
            <Image src="/images/logo.svg" alt="logo" width={148} height={38} />
          
            </Link>
          </div>
          

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
                className="font-medium text-base text-grey hover:no-underline"
                onClick={() => handleClick()}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-grey text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-3 md:gap-4 items-center">
            <button
              className="lg:hidden text-grey text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
            <Link
              href="https://cloud.ductape.app"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden lg:inline-block font-semibold text-base bg-transparent border-0 text-grey hover:no-underline"
            >
              Login
            </Link>
            <DownloadButton />
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white bg-opacity-90 w-full absolute top-0 left-0 z-50 border-b">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-6 text-grey text-2xl"
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
                className="text-grey hover:no-underline font-semibold"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://cloud.ductape.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-base bg-transparent border-0 text-grey hover:no-underline"
            >
              Login
            </Link>
          </div>
        )}

    </header>
  )
}
