import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"

import "./globals.css"
import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"
import LoadingScreen from "@/components/loading-screen"
import ThemeProvider from "@/components/theme-switcher"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Sqwuid",
  description: "We build, launch, and scale innovative companies.",
  icons: {
    icon: "icons/sqwuid.ico",
    apple: "icons/apple-icon.png",
  },
  manifest: "icons/manifest.json",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-background text-foreground`}>
        <ThemeProvider>
          <LoadingScreen />
          <div className="flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'