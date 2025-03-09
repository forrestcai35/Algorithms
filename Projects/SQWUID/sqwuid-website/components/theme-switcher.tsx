"use client"

import { useState, useEffect, createContext, useContext } from "react"
import type { ReactNode } from "react"

const ThemeContext = createContext<{
  theme: "dark" | "light"
  toggleTheme: () => void
}>({
  theme: "dark",
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    // Initialize theme based on stored preference or system preference
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const applyTheme = (newTheme: "dark" | "light") => {
    const root = document.documentElement

    if (newTheme === "dark") {
      root.style.setProperty("--background-color", "#121212")
      root.style.setProperty("--foreground-color", "#f0f0f0")
      root.style.setProperty("--primary-color", "#9c9cff")
      root.style.setProperty("--muted-color", "#1a1a1a")
      root.style.setProperty("--border-color", "#2a2a2a")
    } else {
      root.style.setProperty("--background-color", "#ffffff")
      root.style.setProperty("--foreground-color", "#121212")
      root.style.setProperty("--primary-color", "#6b6bff")
      root.style.setProperty("--muted-color", "#f5f5f5")
      root.style.setProperty("--border-color", "#e0e0e0")
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

