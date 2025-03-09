"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/components/theme-switcher"

export default function SiteFooter() {
  const { theme } = useTheme()
  
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src={theme === 'dark' ? 'dark-logo.png' : 'light-logo.png'}
                alt="Sqwuid Logo"
                fill
                className="object-contain"
              />
            </div>
      
          </div>
          <p className="text-base text-muted-foreground">© {new Date().getFullYear()} Sqwuid. All rights reserved.</p>
          <nav>
            <ul className="flex items-center gap-4">
        
            <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
         
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

