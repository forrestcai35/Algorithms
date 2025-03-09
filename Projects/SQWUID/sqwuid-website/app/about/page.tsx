"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import WaveAnimation from "@/components/animations/wave-animation"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Side-by-side layout */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <WaveAnimation />

        <div className="container relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <motion.h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Sqwuid
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                We're a venture foundry on a mission to build and scale exceptional companies that solve real problems.
              </motion.p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.span 
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(156, 156, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Founded in 2025
                </motion.span>
                {/* <motion.span 
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(156, 156, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  5+ Ventures Launched
                </motion.span>
                <motion.span 
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(156, 156, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  10M+ Users
                </motion.span> */}
              </div>
            </motion.div>
            <motion.div 
              className="relative h-[400px] rounded-lg overflow-hidden"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
        
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Timeline layout */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>

          <motion.div 
            className="relative border-l border-border pl-8 ml-4 space-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="relative" 
              variants={itemFadeIn}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="absolute -left-12 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(156, 156, 255, 0.3)" }}
              >
                <div className="h-4 w-4 rounded-full bg-primary"></div>
              </motion.div>
              <h3 className="text-2xl font-bold">The Beginning</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Sqwuid was founded by a team of creatives, doers, and believers who go all in on work and believe that the rest will follow.
              </p>
            </motion.div>

            <motion.div 
              className="relative" 
              variants={itemFadeIn}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="absolute -left-12 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(156, 156, 255, 0.3)" }}
              >
                <div className="h-4 w-4 rounded-full bg-primary"></div>
              </motion.div>
              <h3 className="text-2xl font-bold">First Ventures</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                We are working on our first ventures, establishing our hands-on
                approach to company building, and learning as we go.
              </p>
            </motion.div>

            <motion.div 
              className="relative" 
              variants={itemFadeIn}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="absolute -left-12 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(156, 156, 255, 0.3)" }}
              >
                <div className="h-4 w-4 rounded-full bg-primary"></div>
              </motion.div>
              <h3 className="text-2xl font-bold">What's Next?</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                As we expand our team and portfolio, we plan to continue learning and growing as builders, expanding into different expertise and industries looking to make an bigger impact on the world.
              </p>
            </motion.div>

  
          </motion.div>
        </div>
      </section>

      {/* Our Values - Card grid with hover effects */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              These core principles guide everything we do at Sqwuid.
            </p>
          </motion.div>
          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                title: "Innovation",
                description: "We're constantly pushing boundaries and exploring new ideas to create value.",
                icon: "💡",
              },
              {
                title: "Collaboration",
                description: "We believe the best results come from working together with diverse perspectives.",
                icon: "🤝",
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and a commitment to doing what's right.",
                icon: "🛡️",
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in everything we do.",
                icon: "🏆",
              },
              {
                title: "Impact",
                description: "We measure success by the positive difference we make in the world.",
                icon: "🌍",
              },
              {
                title: "Resilience",
                description: "We embrace challenges and persist through obstacles with determination.",
                icon: "💪",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="rounded-lg border border-border bg-background p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
                variants={itemFadeIn}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(156, 156, 255, 0.1)",
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-medium">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Highlights - Circular layout */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Leadership Team
          </motion.h2>

          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
  
              <motion.div 
                className="text-center w-[200px]"
                variants={itemFadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-muted ring-4 ring-primary/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(156, 156, 255, 0.3)" }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2}}
                >
                  <Image
                    src={`/team/headshot/forrest.jpeg`}
                    alt={"Forrest"}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.h3 
                  className="mt-4 text-xl font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {"Forrest"}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4}}
                >
                  {"CEO & Founder"}
                </motion.p>
   
            </motion.div>
            <motion.div 
                className="text-center w-[200px]"
                variants={itemFadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-muted ring-4 ring-primary/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(156, 156, 255, 0.3)" }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2}}
                >
                  <Image
                    src={`/team/headshot/kevin.jpeg`}
                    alt={"Kevin"}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.h3 
                  className="mt-4 text-xl font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {"Kevin"}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4}}
                >
                  {"CTO & Co-Founder"}
                </motion.p>
   
            </motion.div>
            <motion.div 
                className="text-center w-[200px]"
                variants={itemFadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-muted ring-4 ring-primary/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(156, 156, 255, 0.3)" }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2}}
                >
                  <Image
                    src={`/team/headshot/aakash.jpeg`}
                    alt={"Aakash"}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <motion.h3 
                  className="mt-4 text-xl font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {"Aakash"}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4}}
                >
                  {"COO & Co-Founder"}
                </motion.p>
   
            </motion.div>

          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="relative overflow-hidden group">
                <Link href="/team">
                  <span className="relative z-10">Meet our full team</span>
                  <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Gradient background */}
      <section className="py-16 md:py-24" style={{
        background: `linear-gradient(to bottom right, var(--background-color), var(--background-color), var(--primary-color, #9c9cff)/0.1)`
      }}>
        <div className="container">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Journey</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you're an entrepreneur, investor, or potential team member, we'd love to connect.
            </p>
            <motion.div 
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="gap-2 group relative overflow-hidden" 
                  asChild
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center">
                      Get in touch <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </Button>
              </motion.div>
              {/* <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="relative overflow-hidden group"
                  asChild
                >
                  <Link href="/team">
                    <span className="relative z-10">Meet our team</span>
                    <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </Button>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

