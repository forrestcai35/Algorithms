"use client"

import { useState, useEffect } from "react"

export function useScroll() {
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY) {
        setHidden(true) // Scrolling down
      } else {
        setHidden(false) // Scrolling up
      }

      // Set scrolled state for background opacity
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return { scrolled, hidden }
} 