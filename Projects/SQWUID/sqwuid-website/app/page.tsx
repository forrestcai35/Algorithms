"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Compass, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import ParticlesAnimation from "@/components/animations/particles-animation"

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

export default function Home() {
  return (
    <>
      {/* Hero Section - Unique full-width design */}
      <section className="relative overflow-hidden py-32 md:py-40">
        <ParticlesAnimation />
        <div className="container relative z-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl" variants={fadeIn}>
              We build <span className="text-primary">exceptional</span> ventures
            </motion.h1>
            <motion.p className="mt-8 text-xl text-muted-foreground" variants={fadeIn}>
              Sqwuid is a venture foundry that partners with entrepreneurs to build, launch, and scale innovative
              companies.
            </motion.p>
            <motion.div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row" variants={fadeIn}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="gap-2 bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/portfolio">
                    Our portfolio <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/about">Learn more</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section - Asymmetrical grid layout */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What sets us apart
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-background p-8 rounded-lg border border-border flex flex-col h-full"
              variants={itemFadeIn}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(156, 156, 255, 0.1)",
              }}
            >
              <Lightbulb className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Innovative Approach</h3>
              <p className="text-muted-foreground flex-grow">
                We combine strategic thinking with cutting-edge technology to create ventures that disrupt industries.
              </p>
            </motion.div>

            <motion.div
              className="bg-background p-8 rounded-lg border border-border flex flex-col h-full md:translate-y-12"
              variants={itemFadeIn}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(156, 156, 255, 0.1)",
              }}
            >
              <Building className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Hands-on Building</h3>
              <p className="text-muted-foreground flex-grow">
                Unlike traditional VCs, we actively build alongside founders, providing operational expertise and
                resources.
              </p>
            </motion.div>

            <motion.div
              className="bg-background p-8 rounded-lg border border-border flex flex-col h-full"
              variants={itemFadeIn}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(156, 156, 255, 0.1)",
              }}
            >
              <Compass className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">Strategic Direction</h3>
              <p className="text-muted-foreground flex-grow">
                We help navigate complex markets and identify opportunities for sustainable growth and competitive
                advantage.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories - Horizontal scrolling section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              We've helped build and scale innovative companies across various industries. Here are some of our recent
              success stories.
            </p>
          </motion.div>

          <motion.div
            className="flex overflow-x-auto pb-8 space-x-6 snap-x scrollbar-hide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="snap-start flex-shrink-0 w-full sm:w-[350px] md:w-[400px] overflow-hidden rounded-lg border border-border bg-background"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(156, 156, 255, 0.1)",
              }}
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={`/Prate.png`}
                  alt={`PRate`}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">PRate</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  An AI-powered physiquer rater. 
                </p>
                <Button variant="link" className="mt-4 px-0 text-primary" size="sm" asChild>
                {/* REPLACE WITH WEBSITE LINK LATER */}
                  <Link href={`/portfolio`}> 
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="snap-start flex-shrink-0 w-full sm:w-[350px] md:w-[400px] overflow-hidden rounded-lg border border-border bg-background"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(156, 156, 255, 0.1)",
              }}
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={`/Fina.png`}
                  alt={`Fina`}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">Fina</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A financial education platform to learn crypto and stocks.
                </p>
                <Button variant="link" className="mt-4 px-0 text-primary" size="sm" asChild>
                {/* REPLACE WITH WEBSITE LINK LATER */}
                  <Link href={`/portfolio`}>
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Diagonal split design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted skew-y-3 origin-top-right transform -translate-y-1/4"></div>
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto bg-background rounded-xl border border-border p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(156, 156, 255, 0.15)",
            }}
          >
            <h2 className="text-3xl font-bold text-center">Ready to build something great?</h2>
            <p className="mt-6 text-lg text-muted-foreground text-center">
              Whether you're an entrepreneur with a bold idea or an investor looking for opportunities, we'd love to
              connect.
            </p>
            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/contact">
                    Get in touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={itemFadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Our services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

