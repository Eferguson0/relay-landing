import Image from "next/image"
import Link from "next/link"
import ThemeToggle from "@/components/ui/ThemeToggle"
import Logo from "./ui/Logo"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground relative flex flex-col w-full h-full justify-between">
      <div className="container mx-auto flex flex-col md:flex-row justify-between w-full gap-6 py-12 px-4 items-start">
        <div className="space-y-2">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/terms" className="text-sm hover:text-muted-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-sm hover:text-muted-foreground">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <p className="text-sm mt-4">
            © 2025 Aspire
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/manifesto" className="text-sm hover:text-muted-foreground">
                Manifesto
              </Link>
            </li>
            <li>
              <Link href="https://x.com/Aspire" className="text-sm hover:text-muted-foreground">
                X
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Aspire" className="text-sm hover:text-muted-foreground">
                GitHub
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
} 