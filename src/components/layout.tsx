import type { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/images/bg.svg')]/30 bg-cover bg-center w-full backdrop-blur-ultra">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
