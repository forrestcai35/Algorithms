"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ThemeToggle from "@/components/theme-toggle"
import { useScroll } from "@/hooks/use-scroll"
import { useTheme } from "@/components/theme-switcher"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  // { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
]

export default function MainNav() {
  const pathname = usePathname()
  const { scrolled, hidden } = useScroll()
  const { theme } = useTheme()

  return (
    <header 
      className={`sticky top-0 z-50 border-b border-border bg-background transition-all duration-300
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
        ${scrolled ? 'bg-opacity-80 backdrop-blur-sm' : 'bg-opacity-100'}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="relative h-10 w-10">
            <Image
              src={theme === 'dark' ? 'dark-logo.png' : 'light-logo.png'}
              alt="Sqwuid Logo"
              fill
              className="object-contain"
            />
          </div>
          <span>SQWUID</span>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors hover:text-primary ${isActive ? "text-primary" : ""}`}
                  >
                    {item.label}
                  </Link>
                  {isActive && <div className="absolute -bottom-[1.5px] left-0 right-0 h-[2px] bg-primary" />}
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="hidden border-foreground text-foreground hover:bg-foreground hover:text-background md:flex"
            asChild
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground md:hidden">
                <span className="sr-only">Toggle menu</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <Image
                      src={theme === 'dark' ? 'dark-logo.png' : 'light-logo.png'}
                      alt="Sqwuid Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>SQWUID</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center py-2 text-lg transition-colors hover:text-primary ${
                            isActive ? "text-primary font-medium" : ""
                          }`}
                        >
                          {item.label}
                          {isActive && <div className="ml-2 h-1 w-1 rounded-full bg-primary" />}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

