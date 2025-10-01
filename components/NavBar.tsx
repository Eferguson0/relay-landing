import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Logo from "@/components/ui/Logo"
export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`mx-auto fixed flex left-0 right-0 top-0 w-full z-[130] items-center justify-between max-w-[76rem] select-none transition-all duration-300 ease-in-out ${
          isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } lg:rounded-lg mt-3 backdrop-blur-lg`}
      >
        <header className="relative isolate w-full">
          <nav className="flex items-center justify-between px-6 py-4">
            <div className="flex lg:flex-1 ml-2 -mt-0.5">
              <Link
                className="flex items-center gap-x-2 transition border-b border-transparent hover:border-white"
                href="/"
              >
                <Logo className="w-8 h-8 text-foreground" />
                <span className="text-lg font-medium transition text-foreground align-middle">Aspire</span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="-m-2.5 p-2.5 text-foreground hover:bg-foreground/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">{isMobileMenuOpen ? "Close main menu" : "Open main menu"}</span>
                {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link
                className="text-md/6 font-regular text-foreground transition border-b border-transparent hover:border-foreground"
                href="/#features"
              >
                How it works
              </Link>
              <Link
                className="text-md/6 font-regular text-foreground transition border-b border-transparent hover:border-foreground"
                href="/#usage"
              >
                Features
              </Link>
              <Link
                className="text-md/6 font-regular text-foreground transition border-b border-transparent hover:border-foreground"
                href="/pricing"
              >
                Pricing
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-5">
              <Link
                className="text-md/6 font-medium text-foreground transition border-b border-transparent hover:border-foreground"
                href="/login"
              >
                Log in
              </Link>
              <Link
                className="flex items-center px-2 py-1 gap-x-1 text-md/6 font-medium rounded-lg text-primary-foreground bg-primary hover:bg-primary/90"
                href="/signup"
              >
                Sign up
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </header>
      </div>
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="fixed left-0 top-0 z-[100] h-dvh w-full flex flex-col justify-between bg-background text-foreground px-6 pt-[96px] pb-4"
          aria-hidden="false"
        >
          <ul className="flex flex-col gap-4 text-5xl font-regular">
            <li>
              <Link href="/#features" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                How it works
              </Link>
            </li>
            <li>
              <Link href="/#usage" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 w-full">
            <Link href="/login" className="w-full text-center py-2.5 bg-background text-foreground rounded-lg font-medium border border-foreground border-20" onClick={() => setIsMobileMenuOpen(false)}>Log in</Link>
            <Link href="/signup" className="w-full text-center py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Sign up</Link>
          </div>
        </nav>
      )}
    </>
  )
}
