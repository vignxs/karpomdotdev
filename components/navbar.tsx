"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav
        className={cn(
          "mx-auto flex items-center justify-between rounded-full px-6 py-2 transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent",
        )}
      >
        <Link href="/" className="text-xl font-bold">
          <span className="hero-text-animation">Karpom.Dev</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#works" className="text-sm font-medium hover:text-primary transition-colors">
            Our Work
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Button asChild variant="default" size="sm">
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-50">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 p-4">
          <Link href="#works" className="text-xl font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
            Our Work
          </Link>
          <Link
            href="#services"
            className="text-xl font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-xl font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Button asChild variant="default" size="lg" onClick={toggleMenu}>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
