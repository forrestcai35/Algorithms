"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import GridAnimation from "@/components/animations/grid-animation"

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Blueprint style */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <GridAnimation />
        <div className="container relative z-10">
          <motion.div className="mx-auto max-w-3xl" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary text-sm font-medium mb-4"
              variants={fadeIn}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(156, 156, 255, 0.2)" }}
            >
              Our Services
            </motion.div>
            <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" variants={fadeIn}>
              Building exceptional ventures together
            </motion.h1>
            <motion.p className="mt-6 text-lg text-muted-foreground md:text-xl" variants={fadeIn}>
              We provide comprehensive support to help entrepreneurs build and scale successful ventures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards - Tabbed interface */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <motion.div
                  className="sticky top-24 space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.a
                    href="#venture-building"
                    className="block p-4 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(156, 156, 255, 0.1)" }}
                  >
                    <h3 className="font-medium">Venture Building</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Co-founding and building ventures from the ground up
                    </p>
                  </motion.a>
                  <motion.a
                    href="#growth-acceleration"
                    className="block p-4 rounded-lg hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(156, 156, 255, 0.1)" }}
                  >
                    <h3 className="font-medium">Growth Acceleration</h3>
                    <p className="text-sm text-muted-foreground mt-1">Helping existing startups scale and grow</p>
                  </motion.a>
                  <motion.a
                    href="#strategic-advisory"
                    className="block p-4 rounded-lg hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(156, 156, 255, 0.1)" }}
                  >
                    <h3 className="font-medium">Strategic Advisory</h3>
                    <p className="text-sm text-muted-foreground mt-1">Providing guidance on key business decisions</p>
                  </motion.a>
                </motion.div>
              </div>

              <div className="col-span-2 space-y-24">
                <motion.div
                  id="venture-building"
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="bg-primary/10 p-4 rounded-lg"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(156, 156, 255, 0.2)" }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2 22H22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M6 18V11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M10 18V11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M14 18V11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M18 18V11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M12 2L20 7H4L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                      </svg>
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-bold">Venture Building</h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                        We co-found and build ventures from the ground up, providing initial capital, operational
                        support, and strategic guidance.
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div className="bg-muted p-6 rounded-lg" variants={itemFadeIn} whileHover={{ scale: 1.02 }}>
                      <h3 className="text-xl font-medium mb-4">What we provide</h3>
                      <ul className="space-y-4">
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">Market validation and research</h4>
                            <p className="mt-1 text-muted-foreground">
                              We conduct extensive market research to validate ideas and identify opportunities.
                            </p>
                          </div>
                        </motion.li>
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">Business model development</h4>
                            <p className="mt-1 text-muted-foreground">
                              We help design and refine business models to ensure sustainable growth.
                            </p>
                          </div>
                        </motion.li>
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">MVP development and testing</h4>
                            <p className="mt-1 text-muted-foreground">
                              We build and test minimum viable products to validate assumptions and gather feedback.
                            </p>
                          </div>
                        </motion.li>
                      </ul>
                    </motion.div>

                    <motion.div
                      className="relative h-[300px] rounded-lg overflow-hidden flex items-center justify-center bg-background/50 p-8"
                      variants={itemFadeIn}
                      whileHover={{ scale: 1.02 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="ventureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(156, 156, 255, 0.2)" />
                            <stop offset="100%" stopColor="rgba(156, 156, 255, 0.6)" />
                          </linearGradient>
                        </defs>

                        {/* Building foundation */}
                        <rect x="100" y="200" width="200" height="50" rx="2" fill="url(#ventureGradient)" />

                        {/* Building blocks */}
                        <g>
                          <motion.rect
                            x="120"
                            y="150"
                            width="160"
                            height="50"
                            rx="2"
                            fill="rgba(156, 156, 255, 0.4)"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                          <motion.rect
                            x="140"
                            y="100"
                            width="120"
                            height="50"
                            rx="2"
                            fill="rgba(156, 156, 255, 0.6)"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                          />
                          <motion.rect
                            x="160"
                            y="50"
                            width="80"
                            height="50"
                            rx="2"
                            fill="rgba(156, 156, 255, 0.8)"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                          />
                        </g>

                        {/* Decorative elements */}
                        <motion.circle
                          cx="200"
                          cy="25"
                          r="15"
                          fill="rgba(156, 156, 255, 1)"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 2 }}
                        />


                        {/* Blueprint grid lines */}
                        <g opacity="0.2" stroke="rgba(156, 156, 255, 0.3)" strokeWidth="0.5">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <line key={`h-${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30} />
                          ))}
                          {Array.from({ length: 14 }).map((_, i) => (
                            <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" />
                          ))}
                        </g>
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  id="growth-acceleration"
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="bg-primary/10 p-4 rounded-lg"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(156, 156, 255, 0.2)" }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21 21H3V3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M21 9L13 17L9 13L3 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                      </svg>
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-bold">Growth Acceleration</h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                        We help existing startups scale by providing capital, strategic partnerships, and operational
                        expertise.
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="relative h-[300px] rounded-lg overflow-hidden flex items-center justify-center bg-background/50 p-8 order-last md:order-first"
                      variants={itemFadeIn}
                      whileHover={{ scale: 1.02 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="growthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(156, 156, 255, 0.2)" />
                            <stop offset="100%" stopColor="rgba(156, 156, 255, 0.6)" />
                          </linearGradient>
                        </defs>

                        {/* Coordinate system */}
                        <line x1="50" y1="250" x2="350" y2="250" stroke="rgba(156, 156, 255, 0.6)" strokeWidth="2" />
                        <line x1="50" y1="50" x2="50" y2="250" stroke="rgba(156, 156, 255, 0.6)" strokeWidth="2" />

                        {/* Axis labels */}
                        <text x="200" y="280" textAnchor="middle" fill="rgba(156, 156, 255, 0.8)" fontSize="12">
                          Time
                        </text>
                        <text
                          x="20"
                          y="150"
                          textAnchor="middle"
                          fill="rgba(156, 156, 255, 0.8)"
                          fontSize="12"
                          transform="rotate(-90, 20, 150)"
                        >
                          Growth
                        </text>

                        {/* Growth curve */}
                        <motion.path
                          d="M50,250 Q125,200 175,150 T300,50"
                          fill="none"
                          stroke="url(#growthGradient)"
                          strokeWidth="3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2 }}
                        />

                        {/* Data points */}
                        <motion.circle
                          cx="50"
                          cy="250"
                          r="5"
                          fill="rgba(156, 156, 255, 0.8)"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                        />
                        <motion.circle
                          cx="125"
                          cy="200"
                          r="5"
                          fill="rgba(156, 156, 255, 0.8)"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 }}
                        />
                        <motion.circle
                          cx="175"
                          cy="150"
                          r="5"
                          fill="rgba(156, 156, 255, 0.8)"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.5 }}
                        />
                        <motion.circle
                          cx="250"
                          cy="100"
                          r="5"
                          fill="rgba(156, 156, 255, 0.8)"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2 }}
                        />
                        <motion.circle
                          cx="300"
                          cy="50"
                          r="5"
                          fill="rgba(156, 156, 255, 0.8)"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2.5 }}
                        />

                        {/* Acceleration indicator */}
                        <motion.path
                          d="M300,50 L330,30"
                          stroke="rgba(156, 156, 255, 1)"
                          strokeWidth="2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.7 }}
                        />
                  

                        {/* Grid lines */}
                        <g opacity="0.2" stroke="rgba(156, 156, 255, 0.3)" strokeWidth="0.5" strokeDasharray="5,5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <line key={`h-${i}`} x1="50" y1={50 + i * 50} x2="350" y2={50 + i * 50} />
                          ))}
                          {Array.from({ length: 7 }).map((_, i) => (
                            <line key={`v-${i}`} x1={50 + i * 50} y1="50" x2={50 + i * 50} y2="250" />
                          ))}
                        </g>
                      </svg>
                    </motion.div>

                    <motion.div className="bg-muted p-6 rounded-lg" variants={itemFadeIn} whileHover={{ scale: 1.02 }}>
                      <h3 className="text-xl font-medium mb-4">How we help</h3>
                      <ul className="space-y-4">
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">Growth strategy and execution</h4>
                            <p className="mt-1 text-muted-foreground">
                              We develop and implement strategies to accelerate growth and market penetration.
                            </p>
                          </div>
                        </motion.li>
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">Talent acquisition and development</h4>
                            <p className="mt-1 text-muted-foreground">
                              We help companies build high-performing teams and develop leadership capabilities.
                            </p>
                          </div>
                        </motion.li>
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">Fundraising support and investor connections</h4>
                            <p className="mt-1 text-muted-foreground">
                              We help companies raise capital and connect with strategic investors.
                            </p>
                          </div>
                        </motion.li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  id="strategic-advisory"
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="bg-primary/10 p-4 rounded-lg"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(156, 156, 255, 0.2)" }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M12 3V5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M12 19V21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M5 12H3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M21 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M4.93 4.93L6.34 6.34"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M17.66 17.66L19.07 19.07"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M4.93 19.07L6.34 17.66"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                        <path
                          d="M19.07 4.93L17.66 6.34"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        />
                      </svg>
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-bold">Strategic Advisory</h2>
                      <p className="mt-4 text-lg text-muted-foreground">
                        We provide strategic guidance to help companies navigate challenges and capitalize on
                        opportunities.
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div className="bg-muted p-6 rounded-lg" variants={itemFadeIn} whileHover={{ scale: 1.02 }}>
                      <h3 className="text-xl font-medium mb-4">Our expertise</h3>
                      <ul className="space-y-4">
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">Business strategy and planning</h4>
                            <p className="mt-1 text-muted-foreground">
                              We help companies develop and refine their business strategies and plans.
                            </p>
                          </div>
                        </motion.li>
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">Market expansion and internationalization</h4>
                            <p className="mt-1 text-muted-foreground">
                              We help companies enter new markets and expand their global footprint.
                            </p>
                          </div>
                        </motion.li>
                        <motion.li
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h4 className="font-medium">M&A and exit planning</h4>
                            <p className="mt-1 text-muted-foreground">
                              We help companies prepare for and execute successful exits.
                            </p>
                          </div>
                        </motion.li>
                      </ul>
                    </motion.div>

                    <motion.div
                      className="relative h-[300px] rounded-lg overflow-hidden flex items-center justify-center bg-background/50 p-8"
                      variants={itemFadeIn}
                      whileHover={{ scale: 1.02 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="strategyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(156, 156, 255, 0.2)" />
                            <stop offset="100%" stopColor="rgba(156, 156, 255, 0.6)" />
                          </linearGradient>
                        </defs>

                        {/* Central compass/strategy element */}
                        <motion.circle
                          cx="200"
                          cy="150"
                          r="80"
                          fill="none"
                          stroke="url(#strategyGradient)"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 1 }}
                        />

                        {/* Compass points */}
                        <motion.path
                          d="M200,70 L200,230 M120,150 L280,150"
                          stroke="rgba(156, 156, 255, 0.6)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />

                        {/* Compass direction labels */}
                        <motion.text
                          x="200"
                          y="60"
                          textAnchor="middle"
                          fill="rgba(156, 156, 255, 0.8)"
                          fontSize="12"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 }}
                        >
                          N
                        </motion.text>
                        <motion.text
                          x="200"
                          y="245"
                          textAnchor="middle"
                          fill="rgba(156, 156, 255, 0.8)"
                          fontSize="12"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4 }}
                        >
                          S
                        </motion.text>
                        <motion.text
                          x="110"
                          y="154"
                          textAnchor="middle"
                          fill="rgba(156, 156, 255, 0.8)"
                          fontSize="12"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6 }}
                        >
                          W
                        </motion.text>
                        <motion.text
                          x="290"
                          y="154"
                          textAnchor="middle"
                          fill="rgba(156, 156, 255, 0.8)"
                          fontSize="12"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.8 }}
                        >
                          E
                        </motion.text>

                        {/* Strategy elements */}
                        <motion.circle
                          cx="200"
                          cy="150"
                          r="10"
                          fill="rgba(156, 156, 255, 0.8)"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2 }}
                        />

                   
                     

                        {/* Strategic elements around compass */}
                        <motion.circle
                          cx="300"
                          cy="80"
                          r="20"
                          fill="rgba(156, 156, 255, 0.2)"
                          stroke="rgba(156, 156, 255, 0.6)"
                          strokeWidth="1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2.4 }}
                        />
                        <motion.circle
                          cx="100"
                          cy="80"
                          r="15"
                          fill="rgba(156, 156, 255, 0.2)"
                          stroke="rgba(156, 156, 255, 0.6)"
                          strokeWidth="1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2.6 }}
                        />
                        <motion.circle
                          cx="300"
                          cy="220"
                          r="15"
                          fill="rgba(156, 156, 255, 0.2)"
                          stroke="rgba(156, 156, 255, 0.6)"
                          strokeWidth="1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2.8 }}
                        />
                        <motion.circle
                          cx="100"
                          cy="220"
                          r="20"
                          fill="rgba(156, 156, 255, 0.2)"
                          stroke="rgba(156, 156, 255, 0.6)"
                          strokeWidth="1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 3 }}
                        />

                        {/* Connecting lines */}
                        <motion.path
                          d="M200,150 L300,80 M200,150 L100,80 M200,150 L300,220 M200,150 L100,220"
                          stroke="rgba(156, 156, 255, 0.4)"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 3.2 }}
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Numbered steps */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We follow a proven methodology to ensure success at every stage.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-border"></div>

            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your vision, goals, and challenges through in-depth discussions and research.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a tailored strategy that outlines the path forward, including key milestones and resource requirements.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We work alongside you to implement the strategy, providing hands-on support and expertise.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "We continuously monitor progress, gather feedback, and make adjustments to optimize performance and results.",
              },
              {
                step: "05",
                title: "Scale",
                description:
                  "We help you scale the business through strategic partnerships, additional funding, and operational support.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`relative z-10 flex items-center gap-8 mb-16 ${i % 2 === 0 ? "flex-row-reverse text-right" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? "pr-16" : "pl-16"}`}>
                  <div className="text-sm font-medium text-primary mb-2">{item.step}</div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>

                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center"
            
                >
                  <span className="font-bold">{item.step}</span>
                </motion.div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="rounded-lg border border-border bg-background p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(156, 156, 255, 0.15)",
            }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to get started?</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Let's discuss how we can help you build and scale your venture.
              </p>
              <motion.div
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="gap-2 group relative overflow-hidden"
                    asChild
                  >
                    <Link href="/contact">
                      <span className="relative z-10 flex items-center">
                        Get in touch{" "}
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden"
    
                    asChild
                  >
                    <Link href="/portfolio">
                      <span className="relative z-10">View our portfolio</span>
                      <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

