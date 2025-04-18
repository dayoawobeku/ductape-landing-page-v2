"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { TermsOfUseSection } from "../../../types/terms-of-use"

interface TermsOfUseSidebarProps {
  sections: TermsOfUseSection[]
}

export default function TermsOfUseSidebar({ sections }: TermsOfUseSidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => {
        const element = document.getElementById(section.id)
        if (!element) return { id: section.id, position: 0 }
        return {
          id: section.id,
          position: element.getBoundingClientRect().top,
        }
      })

      // Find the section closest to the top of the viewport
      const closestSection = sectionElements
        .filter((section) => section.position <= 100)
        .sort((a, b) => b.position - a.position)[0]

      if (closestSection) {
        setActiveSection(closestSection.id)
      } else if (sectionElements.length > 0) {
        setActiveSection(sectionElements[0].id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections])

  return (
    <div className="py-4 rounded-lg sticky top-20 px-6 min-[1312px]:px-0">
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className={`block py-1 px-2 rounded text-sm hover:bg-grey-100 text-[18px] font-semibold ${
                  activeSection === section.id ? " text-primary" : "text-[#818390]"
                }`}
              >
                {section.title || section.id}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
